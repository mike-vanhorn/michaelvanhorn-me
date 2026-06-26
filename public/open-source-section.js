(() => {
	const reposEl = document.getElementById('os-repos');
	const labelsEl = document.getElementById('os-labels');
	const grid = document.querySelector('[data-os-grid]');
	const filters = document.querySelector('[data-os-filters]');

	if (!reposEl || !labelsEl || !grid || !filters) return;

	const labels = JSON.parse(labelsEl.textContent || '{}');
	const languageColors = {
		TypeScript: '#2F6DB0',
		JavaScript: '#C9A227',
		Python: '#4B7B3A',
		HTML: '#B5532A',
	};
	let repos = JSON.parse(reposEl.textContent || '[]');
	let activeLanguage = 'all';

	function escapeHtml(value) {
		return String(value ?? '').replace(/[&<>"']/g, (char) => {
			return {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
			}[char];
		});
	}

	function languageLabel(language) {
		return language || '-';
	}

	function fallbackDescription(repo) {
		const localDescription = labels.repoDescriptions?.[repo.name];
		if (localDescription) return localDescription;

		const language = languageLabel(repo.language);
		return labels.descFallback.replace('{language}', language);
	}

	function relativeUpdated(updatedAt) {
		const then = new Date(updatedAt);
		if (Number.isNaN(then.getTime())) return '';

		const diffSeconds = Math.round((Date.now() - then.getTime()) / 1000);
		const ranges = [
			['year', 60 * 60 * 24 * 365],
			['month', 60 * 60 * 24 * 30],
			['week', 60 * 60 * 24 * 7],
			['day', 60 * 60 * 24],
			['hour', 60 * 60],
			['minute', 60],
		];
		const formatter = new Intl.RelativeTimeFormat(labels.lang || 'en', { numeric: 'auto' });

		for (const [unit, seconds] of ranges) {
			if (Math.abs(diffSeconds) >= seconds || unit === 'minute') {
				return formatter.format(-Math.round(diffSeconds / seconds), unit);
			}
		}

		return formatter.format(0, 'minute');
	}

	function renderCard(repo, copy) {
		const lang = languageLabel(repo.language);
		const dotColor = languageColors[repo.language] || '#8B8378';
		const description = repo.description || fallbackDescription(repo);
		const stars =
			Number(repo.stars) > 0
				? `<span class="repo-meta-item"><span class="ti ti-star" aria-hidden="true"></span>${new Intl.NumberFormat(copy.lang || 'en').format(repo.stars)}</span>`
				: '';
		const archived = repo.archived ? `<span class="repo-tag">${escapeHtml(copy.archived)}</span>` : '';

		return `
			<a class="repo-card" href="${escapeHtml(repo.url)}" aria-label="${escapeHtml(`${repo.name} ${copy.viewOnGitHub}`)}">
				<div class="repo-card-head">
					<h3>${escapeHtml(repo.name)}</h3>
					<span class="repo-language">
						<span class="repo-language-dot" style="--dot-color: ${escapeHtml(dotColor)}"></span>
						${escapeHtml(lang)}
					</span>
				</div>
				<p>${escapeHtml(description)}</p>
				<div class="repo-meta">
					${stars}
					<span class="repo-meta-item">${escapeHtml(copy.updated)} ${escapeHtml(relativeUpdated(repo.updatedAt))}</span>
					<span class="repo-meta-item repo-view">${escapeHtml(copy.viewOnGitHub)} <span class="ti ti-external-link" aria-hidden="true"></span></span>
					${archived}
				</div>
			</a>
		`;
	}

	function visibleRepos() {
		return activeLanguage === 'all' ? repos : repos.filter((repo) => repo.language === activeLanguage);
	}

	function renderGrid() {
		const cards = visibleRepos();
		grid.innerHTML = cards.length
			? cards.map((repo) => renderCard(repo, labels)).join('')
			: `<a class="github-profile-link" href="${escapeHtml(labels.githubUrl)}">${escapeHtml(labels.viewProfile)} &rarr;</a>`;
	}

	function renderChips(nextRepos) {
		const languages = [...new Set(nextRepos.map((repo) => repo.language).filter(Boolean))].sort((a, b) =>
			a.localeCompare(b, labels.lang || 'en')
		);
		const chips = ['all', ...languages];

		if (activeLanguage !== 'all' && !languages.includes(activeLanguage)) {
			activeLanguage = 'all';
		}

		filters.innerHTML = chips
			.map((chip) => {
				const isActive = chip === activeLanguage;
				const label = chip === 'all' ? labels.all : chip;
				return `<button class="repo-chip" type="button" data-language="${escapeHtml(chip)}" aria-pressed="${isActive}">${escapeHtml(label)}</button>`;
			})
			.join('');

		filters.querySelectorAll('button').forEach((button) => {
			button.addEventListener('click', () => {
				activeLanguage = button.dataset.language || 'all';
				renderChips(repos);
				renderGrid();
			});
		});
	}

	function render(nextRepos) {
		repos = [...nextRepos].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
		renderChips(repos);
		renderGrid();
	}

	render(repos);

	fetch(labels.apiUrl, { headers: { Accept: 'application/vnd.github+json' } })
		.then((response) => {
			if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
			return response.json();
		})
		.then((data) => {
			const liveRepos = data
				.filter((repo) => !repo.fork)
				.map((repo) => ({
					name: repo.name,
					description: repo.description,
					language: repo.language,
					stars: repo.stargazers_count,
					updatedAt: repo.updated_at,
					url: repo.html_url,
					archived: repo.archived,
				}));

			if (liveRepos.length > 0) render(liveRepos);
		})
		.catch(() => {});
})();
