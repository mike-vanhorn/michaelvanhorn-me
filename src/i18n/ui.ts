export const languages = {
	en: 'English',
	vi: 'Tiếng Việt',
	es: 'Español',
	oj: 'Anishinaabemowin',
} as const;

export const languageShortLabels = {
	en: 'EN',
	vi: 'VI',
	es: 'ES',
	oj: 'OJ',
} as const;

export const defaultLang = 'en';
export const locales = ['en', 'vi', 'es', 'oj'] as const;

export type Locale = (typeof locales)[number];

const localeSet = new Set<string>(locales);

function cleanPath(path: string): string {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	const clean = normalizedPath
		.replace(/index\.html$/, '')
		.replace(/\.html$/, '')
		.replace(/\/$/, '');

	return clean || '/';
}

export const ui = {
	en: {
		'nav.work': 'Work',
		'nav.writing': 'Writing',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.menu': 'Menu',
		'footer.navAria': 'Footer navigation',
		'footer.signoff': '',
		'chrome.skipToContent': 'Skip to content',
		'language.label': 'Language',
		'home.meta.title': 'Michael Van Horn · The human side of AI in the workplace',
		'home.meta.description':
			'HRD researcher and builder. I study how AI adoption reshapes work and stress, and I build the tools and frameworks that make the shift humane.',
		'home.hero.kicker': 'The human side of AI in the workplace',
		'home.hero.heading.before': 'I help people and organizations work ',
		'home.hero.heading.emphasis': 'well',
		'home.hero.heading.after': ' with AI.',
		'home.actions.label': 'Homepage actions',
		'home.actions.work': 'Read the work',
		'home.actions.contact': 'Get in touch',
		'home.why.aria': 'Why this work',
		'home.why.kicker': 'Why this work',
		'home.why.statement':
			"I'm Anishinaabe, a Red Lake Nation descendant, and I came to AI through people: who it helps, who it leaves out, and how organizations bring their communities along as work changes.",
		'home.research.kicker': 'Featured · Research',
		'home.research.title': 'AI Adoption & Job Stress',
		'home.research.body':
			'An OLPD manuscript I co-authored on how AI rollouts affect employee stress, read by leadership, made required reading for the executive team, and presented at the 2026 OLPD Student Research Conference at the University of Minnesota. The center of how I think about this work.',
		'home.research.cta': 'Read the research',
		'home.work.kicker': 'Selected work',
		'home.work.title': 'Built projects at the edge of AI and work.',
		'home.work.waaban.blurb': 'AI-powered market-analysis platform. Co-founder & CEO.',
		'home.work.markedInRed.blurb':
			'Awareness map for Missing and Murdered Indigenous Women, Girls, and Two-Spirit people. Scoped, designed, and shipped end to end.',
		'home.work.woodhouse.blurb':
			'Self-built task manager replacing Asana. A local dashboard backed by a private GitHub repo via an Express proxy.',
		'home.work.obsidianAi.blurb':
			'Personal AI memory + agent system with knowledge files, hooks, skills, and a Townfolk agent layer.',
		'home.work.cta': 'See all work',
		'home.opensource.kicker': 'Open source',
		'home.opensource.title': 'Built in public',
		'home.opensource.all': 'All',
		'home.opensource.viewOnGitHub': 'view on GitHub',
		'home.opensource.updated': 'updated',
		'home.opensource.archived': 'archived',
		'home.opensource.descFallback': '{language} repository',
		'home.opensource.viewProfile': 'View my GitHub',
		'home.opensource.repo.michaelvanhornMe.description': 'Personal portfolio site for Michael Van Horn.',
		'home.opensource.repo.markedInRed.description':
			'Awareness map for Missing and Murdered Indigenous Women, Girls, and Two-Spirit people.',
		'home.writing.kicker': 'Writing',
		'home.writing.title': 'Notes on AI and the future of work.',
		'home.writing.body': 'Short pieces on AI adoption, job stress, and keeping the human side in view.',
		'home.writing.cta': 'Read the writing',
		'home.experience.kicker': 'Experience',
		'home.experience.title': 'Where I am putting the work into practice.',
		'home.experience.meetMinneapolis.role': 'Equity & Community Impact',
		'home.experience.waaban.role': 'Co-founder & CEO',
		'home.experience.resume': 'Download résumé (PDF)',
		'home.recommendation.kicker': 'Recommendation',
		'home.recommendation.title': "What it's like to work with me.",
		'home.recommendation.quote1':
			"He's proactive, reliable, and easy to work with, someone who notices what needs attention and takes initiative without needing much direction. One of the most valuable contributions he made was developing a set of AI guidelines for staff and future student office assistants, creating clarity around how we approach and use these tools in our work.",
		'home.recommendation.quote2':
			"I'd confidently recommend him for roles where clarity, ownership, and follow-through matter. He'll bring structure and make processes better wherever he lands.",
		'home.recommendation.name': 'Sarah Cawthon',
		'home.recommendation.role': 'Career Education & Content Manager, University of Minnesota',
		'home.recommendation.context': 'Supervised Mike at U of M Career Services',
		'home.contact.title': "Let's talk about AI and people.",
		'about.meta.title': 'About · Michael Van Horn',
		'about.meta.description':
			'HRD researcher and builder working on the human side of AI in the workplace, raised on the Red Lake Nation and based in the Twin Cities.',
		'about.kicker': 'About',
		'about.hero.title': 'I work on the human side of AI in the workplace.',
		'about.hero.lead':
			'I am an HRD researcher and builder. I study how AI adoption reshapes work and stress, and I build the tools and frameworks that help non-technical teams own the change instead of being run over by it.',
		'about.resume': 'Download résumé (PDF)',
		'about.story.kicker': 'How I got here',
		'about.story.title': 'People first, then the tools.',
		'about.story.p1':
			'I am Anishinaabe, a descendant of the Red Lake Nation. I grew up in Ponemah and Redby on the reservation before moving to the Twin Cities. That background is not a footnote to this work; it is the reason for it. I saw early how change arrives in a community: who it serves, who it leaves behind, and how a place carries its people through it. Growing up on the Red Lake Nation taught me that strong organizations start with relationships, integrity, and cultural awareness. That shapes how I think about every part of human resource development, from how we train people to how we build systems that actually include them.',
		'about.story.p2':
			'My path runs through people first. I came to AI through human resource development: recruiting, onboarding, training, and the daily work of helping people find footing when their jobs change. Working in University of Minnesota Career Services, I authored a formal AI usage policy and training framework for the office, alongside SOPs for its core functions. The more I watched AI enter the workplace, the clearer it became that the hard part was never the tool. It was trust, learning, and whether the people doing the work were brought along or pushed aside.',
		'about.story.p3':
			'So I do both halves. I co-authored a manuscript on AI adoption and job stress, presented at the 2026 OLPD Student Research Conference at the University of Minnesota, and I build real systems: an AI-powered market-analysis platform, a multi-agent governance layer that keeps a knowledge base honest, and tools that give non-technical teams safe, live access to AI. The research keeps the building grounded in people. The building keeps the research grounded in what actually ships. Training-and-development professionals should be leading the conversation about AI at work, not just reacting to it.',
		'about.experience.kicker': 'Experience',
		'about.experience.title': 'Where the work happens.',
		'about.experience.meetMinneapolis.role': 'Equity & Community Impact Intern',
		'about.experience.meetMinneapolis.dates': 'Mar 2026–present · Minneapolis, MN',
		'about.experience.waaban.role': 'Co-founder & CEO',
		'about.experience.waaban.dates': 'Mar 2026–present',
		'about.experience.umn.role': 'Office Assistant',
		'about.experience.umn.dates': 'Jun 2025–Mar 2026 · Minneapolis, MN',
		'about.experience.redLake.role': 'HR & Logistics Intern',
		'about.experience.redLake.dates': 'Jan 2024–Aug 2024 · Red Lake, MN',
		'about.education.kicker': 'Education',
		'about.education.title': 'Studied to do this work.',
		'about.education.umn.role': 'B.S., Human Resource Development (CEHD / OLPD)',
		'about.education.umn.dates': 'Expected Dec 2026 · GPA 3.71',
		'about.education.bemidji.role': 'Associate of Arts (AA), Liberal Arts & Sciences (PSEO)',
		'about.education.bemidji.dates': "2022–2024 · Dean's List",
		'about.certifications.kicker': 'Certifications',
		'about.certifications.title': 'Trained on the tools, too.',
		'about.certifications.aiFluency': 'AI Fluency: Framework & Foundations',
		'about.certifications.claude101': 'Claude 101',
		'about.certifications.anthropic': 'Anthropic',
		'about.contact.title': "Let's talk about AI and people.",
		'contact.meta.title': 'Contact · Michael Van Horn',
		'contact.meta.description':
			'Reach Michael Van Horn by email or LinkedIn. Based in the Twin Cities, MN.',
		'contact.kicker': 'Contact',
		'contact.title': "Let's talk about AI and people.",
		'contact.lead':
			"The best ways to reach me are below. I read every message and reply whenever there's a fit, whether that's collaboration, research, or a role.",
		'contact.channel.email': 'Email',
		'contact.channel.linkedin': 'LinkedIn',
		'contact.channel.github': 'GitHub',
		'contact.channel.location': 'Location',
		'research.meta.title': 'Research · AI Adoption & Job Stress · Michael Van Horn',
		'research.meta.description':
			'AI Adoption & Job Stress: a co-authored study on what actually reduces employee stress when organizations roll out AI. Summary, methods, and key findings.',
		'research.hero.kicker': 'Featured · Research',
		'research.hero.title': 'AI Adoption & Job Stress',
		'research.hero.lead':
			'What actually reduces employee stress when an organization rolls out AI, and why the answer has less to do with the tool than with how people are brought along.',
		'research.hero.byline':
			'A co-authored OLPD manuscript, presented at the 2026 OLPD Student Research Conference at the University of Minnesota.',
		'research.abstract.kicker': 'Abstract',
		'research.abstract.title': 'The short version.',
		'research.abstract.body':
			'Organizations are adopting AI to gain efficiency and cut costs, often relying on employees to learn the new tools largely on their own. This study examines how job stress changes after workplace AI adoption, and which factors shape that change. Drawing on a national survey of full-time U.S. employees, it tests whether a proactive attitude toward AI, general technological savvy, and employer-provided AI training are each associated with lower stress. A proactive attitude toward AI stands out as the factor most clearly linked to lower stress; training participation and general tech comfort are not. Building on those results, the paper reviews how AI training is currently practiced and proposes a redesign centered on continuous learning, critical thinking, leadership training, and job-specific customization.',
		'research.approach.kicker': 'Approach',
		'research.approach.title': 'How the study was done.',
		'research.approach.p1':
			'The core analysis is a quantitative study using national survey data from the RAND American Life Panel, narrowed to full-time employees. Using multiple linear regression, it models job stress after AI adoption against three factors of interest (proactive attitude toward AI, technological savvy, and participation in employer AI training) while controlling for age, gender, income, and education.',
		'research.approach.p2':
			'That quantitative work is paired with a review of practitioner-oriented literature (business and management publications) on how AI training and development is actually being run inside organizations. The two halves connect: the data points to what reduces stress, and the review surfaces where current training practice falls short of it.',
		'research.details.data.label': 'Data',
		'research.details.data.value':
			'RAND American Life Panel, a national survey of full-time U.S. employees',
		'research.details.sample.label': 'Sample',
		'research.details.sample.value': 'n = 793',
		'research.details.method.label': 'Method',
		'research.details.method.value':
			'Multiple linear regression, controlling for age, gender, income, and education',
		'research.details.review.label': 'Literature review',
		'research.details.review.value': '76 practitioner articles on AI training and development',
		'research.details.output.label': 'Output',
		'research.details.output.value': 'Four evidence-based training-and-development recommendations',
		'research.details.limitation.label': 'Limitation',
		'research.details.limitation.value':
			'Observational survey data, so results show associations rather than proven causation',
		'research.findings.kicker': 'Key findings',
		'research.findings.title': 'What the data showed.',
		'research.findings.1':
			'A proactive attitude toward AI was the strongest protective factor. Employees who approached AI as something to engage with, rather than something happening to them, reported lower job stress after adoption.',
		'research.findings.2':
			'Participation in employer AI training programs was not, on its own, associated with lower stress. Offering training was not the same as changing how people felt about the change.',
		'research.findings.3':
			'General technological savvy did not transfer to lower AI-specific stress. Being comfortable with technology in general did not protect people from the strain of a new AI rollout.',
		'research.findings.4':
			'Among demographic factors, higher income tracked with lower stress, while higher educational attainment tracked with higher stress. Gender and age were not significant predictors.',
		'research.findings.5':
			'The practical implication: AI training and development should be redesigned around continuous learning, critical thinking and judgment, leadership-level training, and job-specific customization, so the goal is building proactive engagement, not just teaching the tool.',
		'research.access.kicker': 'The work',
		'research.access.title': 'A note on this research.',
		'research.access.beforeEmail':
			'This is a co-authored research project, written collaboratively. This page is a summary of the manuscript rather than the full paper. The full manuscript is available on request: ',
		'research.contact.title': "Let's talk about AI and people.",
		'notFound.meta.title': 'Page not found · Michael Van Horn',
		'notFound.meta.description': 'The page you were looking for could not be found.',
		'notFound.kicker': 'Error 404',
		'notFound.title': 'This page wandered off.',
		'notFound.lead':
			'The page you were looking for is not here. It may have moved, or the link may be incomplete.',
		'notFound.home': 'Back to home',
		'notFound.work': 'See the work',
		'work.meta.title': 'Work · Michael Van Horn',
		'work.meta.description':
			'Projects at the edge of AI, work, and the systems that help people think clearly.',
		'work.kicker': 'Work',
		'work.heading': 'Built projects at the edge of AI and work.',
		'work.intro':
			'A short collection of products and personal systems I have built to make AI and knowledge work more useful.',
		'work.projectsAria': 'Selected projects',
		'work.projectsKicker': 'Selected projects',
		'work.back': 'Back to work',
		'work.metaAria': 'Project details',
		'work.linksAria': 'Project links',
		'writing.meta.title': 'Writing · Michael Van Horn',
		'writing.meta.description': 'Notes on AI, work, and the people the shift affects.',
		'writing.kicker': 'Writing',
		'writing.heading': 'Notes on AI and the future of work.',
		'writing.intro': 'Short pieces on AI adoption, job stress, and keeping the human side in view.',
		'writing.back': 'Back to writing',
		'writing.tagsAria': 'Tags',
		'writing.medium.title': 'How to Work in Virtual Teams',
		'writing.medium.dek':
			'On virtual-team group dynamics: forming, storming, norming, and performing, the roles people play, and how to collaborate well online.',
		'writing.medium.meta': 'Essay · Medium',
	},
	vi: {
		'nav.work': 'Công việc',
		'nav.writing': 'Bài viết',
		'nav.about': 'Giới thiệu',
		'nav.contact': 'Liên hệ',
		'nav.menu': 'Menu',
		'footer.navAria': 'Điều hướng chân trang',
		'footer.signoff': '',
		'chrome.skipToContent': 'Bỏ qua để đến nội dung',
		'language.label': 'Ngôn ngữ',
		'home.meta.title': 'Michael Van Horn · Góc nhìn con người về AI trong nơi làm việc',
		'home.meta.description':
			'Nhà nghiên cứu và người xây dựng trong lĩnh vực HRD. Tôi nghiên cứu cách việc áp dụng AI định hình lại công việc và căng thẳng, đồng thời xây dựng các công cụ và khung tư duy để quá trình chuyển đổi này nhân văn hơn.',
		'home.hero.kicker': 'Góc nhìn con người về AI trong nơi làm việc',
		'home.hero.heading.before': 'Tôi giúp con người và tổ chức làm việc ',
		'home.hero.heading.emphasis': 'tốt',
		'home.hero.heading.after': ' cùng AI.',
		'home.actions.label': 'Hành động trên trang chủ',
		'home.actions.work': 'Đọc các dự án',
		'home.actions.contact': 'Liên hệ',
		'home.why.aria': 'Vì sao tôi làm công việc này',
		'home.why.kicker': 'Vì sao công việc này',
		'home.why.statement':
			'Tôi là người Anishinaabe, hậu duệ của Red Lake Nation, và tôi đến với AI qua con người: AI giúp ai, bỏ sót ai, và các tổ chức đưa cộng đồng của mình đi cùng như thế nào khi công việc thay đổi.',
		'home.research.kicker': 'Nổi bật · Nghiên cứu',
		'home.research.title': 'Áp dụng AI & Căng thẳng trong công việc',
		'home.research.body':
			'Một bản thảo OLPD tôi đồng tác giả về cách các đợt triển khai AI ảnh hưởng đến căng thẳng của nhân viên; đã được lãnh đạo đọc, trở thành tài liệu bắt buộc cho đội ngũ điều hành, và được trình bày tại Hội nghị Nghiên cứu Sinh viên OLPD năm 2026 tại University of Minnesota. Đây là trung tâm trong cách tôi suy nghĩ về công việc này.',
		'home.research.cta': 'Đọc nghiên cứu',
		'home.work.kicker': 'Dự án chọn lọc',
		'home.work.title': 'Những dự án được xây ở ranh giới giữa AI và công việc.',
		'home.work.waaban.blurb': 'Nền tảng phân tích thị trường được hỗ trợ bởi AI. Đồng sáng lập & CEO.',
		'home.work.markedInRed.blurb':
			'Bản đồ nâng cao nhận thức về Phụ nữ, Trẻ em gái và Người Two-Spirit Bản địa bị mất tích và bị sát hại. Phạm vi, thiết kế và triển khai trọn vẹn từ đầu đến cuối.',
		'home.work.woodhouse.blurb':
			'Công cụ quản lý tác vụ tự xây để thay thế Asana. Một bảng điều khiển cục bộ được hỗ trợ bởi repo GitHub riêng thông qua proxy Express.',
		'home.work.obsidianAi.blurb':
			'Hệ thống trí nhớ AI cá nhân và tác tử với tệp tri thức, hook, skill và lớp tác tử Townfolk.',
		'home.work.cta': 'Xem tất cả dự án',
		'home.opensource.kicker': 'Mã nguồn mở',
		'home.opensource.title': 'Xây dựng công khai',
		'home.opensource.all': 'Tất cả',
		'home.opensource.viewOnGitHub': 'xem trên GitHub',
		'home.opensource.updated': 'cập nhật',
		'home.opensource.archived': 'đã lưu trữ',
		'home.opensource.descFallback': 'Repo {language}',
		'home.opensource.viewProfile': 'Xem GitHub của tôi',
		'home.opensource.repo.michaelvanhornMe.description':
			'Trang portfolio cá nhân của Michael Van Horn.',
		'home.opensource.repo.markedInRed.description':
			'Bản đồ nâng cao nhận thức về Phụ nữ, Trẻ em gái và Người Two-Spirit Bản địa bị mất tích và bị sát hại.',
		'home.writing.kicker': 'Bài viết',
		'home.writing.title': 'Ghi chú về AI và tương lai của công việc.',
		'home.writing.body':
			'Những bài viết ngắn về áp dụng AI, căng thẳng trong công việc, và việc giữ góc nhìn con người ở trung tâm.',
		'home.writing.cta': 'Đọc bài viết',
		'home.experience.kicker': 'Kinh nghiệm',
		'home.experience.title': 'Nơi tôi đang đưa công việc này vào thực tiễn.',
		'home.experience.meetMinneapolis.role': 'Công bằng & Tác động cộng đồng',
		'home.experience.waaban.role': 'Đồng sáng lập & CEO',
		'home.experience.resume': 'Tải sơ yếu lý lịch (PDF)',
		'home.recommendation.kicker': 'Lời giới thiệu',
		'home.recommendation.title': 'Cảm giác khi làm việc cùng tôi.',
		'home.recommendation.quote1':
			'Anh ấy chủ động, đáng tin cậy và dễ làm việc cùng; là người nhận ra điều gì cần được chú ý và tự mình hành động mà không cần nhiều chỉ dẫn. Một trong những đóng góp giá trị nhất của anh ấy là phát triển bộ hướng dẫn AI cho nhân viên và các trợ lý sinh viên trong tương lai, tạo sự rõ ràng về cách chúng tôi tiếp cận và sử dụng những công cụ này trong công việc.',
		'home.recommendation.quote2':
			'Tôi tự tin giới thiệu anh ấy cho những vai trò cần sự rõ ràng, tinh thần làm chủ và khả năng theo đến cùng. Anh ấy sẽ mang lại cấu trúc và cải thiện quy trình ở bất cứ nơi nào anh ấy làm việc.',
		'home.recommendation.name': 'Sarah Cawthon',
		'home.recommendation.role': 'Quản lý Giáo dục Nghề nghiệp & Nội dung, University of Minnesota',
		'home.recommendation.context': 'Đã giám sát Mike tại U of M Career Services',
		'home.contact.title': 'Hãy cùng nói về AI và con người.',
		'about.meta.title': 'Giới thiệu · Michael Van Horn',
		'about.meta.description':
			'Nhà nghiên cứu và người xây dựng trong lĩnh vực HRD, làm việc ở góc nhìn con người của AI trong nơi làm việc; lớn lên tại Red Lake Nation và hiện sống ở Twin Cities.',
		'about.kicker': 'Giới thiệu',
		'about.hero.title': 'Tôi làm việc ở góc nhìn con người của AI trong nơi làm việc.',
		'about.hero.lead':
			'Tôi là nhà nghiên cứu và người xây dựng trong lĩnh vực HRD. Tôi nghiên cứu cách việc áp dụng AI định hình lại công việc và căng thẳng, đồng thời xây dựng các công cụ và khung tư duy giúp các đội ngũ không chuyên về kỹ thuật làm chủ thay đổi thay vì bị cuốn qua bởi nó.',
		'about.resume': 'Tải sơ yếu lý lịch (PDF)',
		'about.story.kicker': 'Tôi đã đến đây như thế nào',
		'about.story.title': 'Con người trước, rồi mới đến công cụ.',
		'about.story.p1':
			'Tôi là người Anishinaabe, hậu duệ của Red Lake Nation. Tôi lớn lên ở Ponemah và Redby trong khu bảo tồn trước khi chuyển đến Twin Cities. Bối cảnh đó không phải là một chú thích cho công việc này; đó là lý do tôi làm nó. Từ sớm tôi đã thấy sự thay đổi đi vào một cộng đồng như thế nào: nó phục vụ ai, bỏ lại ai phía sau, và một nơi chốn đưa con người của mình đi qua thay đổi ra sao. Lớn lên tại Red Lake Nation dạy tôi rằng các tổ chức vững mạnh bắt đầu từ mối quan hệ, sự chính trực và nhận thức văn hóa. Điều đó định hình cách tôi nghĩ về mọi phần của phát triển nguồn nhân lực, từ cách chúng ta đào tạo con người đến cách chúng ta xây dựng những hệ thống thật sự bao gồm họ.',
		'about.story.p2':
			'Con đường của tôi đi qua con người trước tiên. Tôi đến với AI thông qua phát triển nguồn nhân lực: tuyển dụng, hội nhập, đào tạo, và công việc hằng ngày là giúp mọi người tìm được điểm tựa khi công việc của họ thay đổi. Khi làm việc tại University of Minnesota Career Services, tôi đã soạn một chính sách sử dụng AI chính thức và khung đào tạo cho văn phòng, cùng với các SOP cho những chức năng cốt lõi. Càng quan sát AI bước vào nơi làm việc, tôi càng thấy rõ phần khó chưa bao giờ là công cụ. Đó là niềm tin, việc học, và liệu những người đang làm công việc đó có được đưa đi cùng hay bị gạt sang một bên.',
		'about.story.p3':
			'Vì vậy tôi làm cả hai nửa. Tôi đồng tác giả một bản thảo về áp dụng AI và căng thẳng trong công việc, được trình bày tại Hội nghị Nghiên cứu Sinh viên OLPD năm 2026 tại University of Minnesota, và tôi xây dựng các hệ thống thực: một nền tảng phân tích thị trường được hỗ trợ bởi AI, một lớp quản trị đa tác tử giúp giữ cho cơ sở tri thức trung thực, và các công cụ cho phép đội ngũ không chuyên về kỹ thuật tiếp cận AI một cách an toàn và trực tiếp. Nghiên cứu giữ việc xây dựng bám vào con người. Việc xây dựng giữ nghiên cứu bám vào những gì thật sự được triển khai. Các chuyên gia đào tạo và phát triển nên dẫn dắt cuộc trò chuyện về AI trong công việc, không chỉ phản ứng với nó.',
		'about.experience.kicker': 'Kinh nghiệm',
		'about.experience.title': 'Nơi công việc diễn ra.',
		'about.experience.meetMinneapolis.role': 'Thực tập sinh Công bằng & Tác động cộng đồng',
		'about.experience.meetMinneapolis.dates': 'Tháng 3 2026–hiện tại · Minneapolis, MN',
		'about.experience.waaban.role': 'Đồng sáng lập & CEO',
		'about.experience.waaban.dates': 'Tháng 3 2026–hiện tại',
		'about.experience.umn.role': 'Trợ lý văn phòng',
		'about.experience.umn.dates': 'Tháng 6 2025–Tháng 3 2026 · Minneapolis, MN',
		'about.experience.redLake.role': 'Thực tập sinh HR & Logistics',
		'about.experience.redLake.dates': 'Tháng 1 2024–Tháng 8 2024 · Red Lake, MN',
		'about.education.kicker': 'Học vấn',
		'about.education.title': 'Học để làm công việc này.',
		'about.education.umn.role': 'B.S., Human Resource Development (CEHD / OLPD)',
		'about.education.umn.dates': 'Dự kiến Tháng 12 2026 · GPA 3.71',
		'about.education.bemidji.role': 'Associate of Arts (AA), Liberal Arts & Sciences (PSEO)',
		'about.education.bemidji.dates': "2022–2024 · Dean's List",
		'about.certifications.kicker': 'Chứng chỉ',
		'about.certifications.title': 'Tôi cũng được đào tạo về các công cụ.',
		'about.certifications.aiFluency': 'AI Fluency: Framework & Foundations',
		'about.certifications.claude101': 'Claude 101',
		'about.certifications.anthropic': 'Anthropic',
		'about.contact.title': 'Hãy cùng nói về AI và con người.',
		'contact.meta.title': 'Liên hệ · Michael Van Horn',
		'contact.meta.description':
			'Liên hệ Michael Van Horn qua email hoặc LinkedIn. Hiện sống tại Twin Cities, MN.',
		'contact.kicker': 'Liên hệ',
		'contact.title': 'Hãy cùng nói về AI và con người.',
		'contact.lead':
			'Những cách tốt nhất để liên hệ với tôi ở bên dưới. Tôi đọc mọi tin nhắn và phản hồi khi có sự phù hợp, dù đó là hợp tác, nghiên cứu hay một vai trò.',
		'contact.channel.email': 'Email',
		'contact.channel.linkedin': 'LinkedIn',
		'contact.channel.github': 'GitHub',
		'contact.channel.location': 'Địa điểm',
		'research.meta.title': 'Nghiên cứu · AI Adoption & Job Stress · Michael Van Horn',
		'research.meta.description':
			'AI Adoption & Job Stress: một nghiên cứu đồng tác giả về điều gì thật sự giảm căng thẳng cho nhân viên khi tổ chức triển khai AI. Tóm tắt, phương pháp và phát hiện chính.',
		'research.hero.kicker': 'Nổi bật · Nghiên cứu',
		'research.hero.title': 'AI Adoption & Job Stress',
		'research.hero.lead':
			'Điều gì thật sự giảm căng thẳng cho nhân viên khi một tổ chức triển khai AI, và vì sao câu trả lời liên quan đến cách con người được đưa đi cùng nhiều hơn là bản thân công cụ.',
		'research.hero.byline':
			'Một bản thảo OLPD đồng tác giả, được trình bày tại Hội nghị Nghiên cứu Sinh viên OLPD năm 2026 tại University of Minnesota.',
		'research.abstract.kicker': 'Tóm tắt',
		'research.abstract.title': 'Phiên bản ngắn.',
		'research.abstract.body':
			'Các tổ chức đang áp dụng AI để tăng hiệu quả và giảm chi phí, thường dựa vào nhân viên tự học các công cụ mới phần lớn bằng chính họ. Nghiên cứu này xem xét căng thẳng trong công việc thay đổi như thế nào sau khi áp dụng AI tại nơi làm việc, và những yếu tố nào định hình sự thay đổi đó. Dựa trên một khảo sát toàn quốc với nhân viên toàn thời gian tại Hoa Kỳ, nghiên cứu kiểm định liệu thái độ chủ động với AI, mức độ thành thạo công nghệ nói chung, và đào tạo AI do nhà tuyển dụng cung cấp có liên hệ với mức căng thẳng thấp hơn hay không. Thái độ chủ động với AI nổi bật là yếu tố có liên hệ rõ nhất với căng thẳng thấp hơn; việc tham gia đào tạo và sự thoải mái chung với công nghệ thì không. Từ những kết quả đó, bài viết xem xét cách đào tạo AI hiện đang được thực hành và đề xuất một thiết kế lại xoay quanh học tập liên tục, tư duy phản biện, đào tạo lãnh đạo và tùy chỉnh theo công việc cụ thể.',
		'research.approach.kicker': 'Cách tiếp cận',
		'research.approach.title': 'Nghiên cứu được thực hiện như thế nào.',
		'research.approach.p1':
			'Phân tích cốt lõi là một nghiên cứu định lượng sử dụng dữ liệu khảo sát toàn quốc từ RAND American Life Panel, được thu hẹp vào nhóm nhân viên toàn thời gian. Sử dụng multiple linear regression, nghiên cứu mô hình hóa căng thẳng trong công việc sau khi áp dụng AI theo ba yếu tố quan tâm (thái độ chủ động với AI, mức độ thành thạo công nghệ, và việc tham gia đào tạo AI do nhà tuyển dụng cung cấp), đồng thời kiểm soát age, gender, income, and education.',
		'research.approach.p2':
			'Phần định lượng đó được kết hợp với một tổng quan tài liệu hướng đến thực hành (các ấn phẩm kinh doanh và quản lý) về cách đào tạo và phát triển AI đang thật sự được vận hành bên trong tổ chức. Hai nửa kết nối với nhau: dữ liệu chỉ ra điều gì giảm căng thẳng, còn phần tổng quan cho thấy thực hành đào tạo hiện nay đang thiếu ở đâu so với điều đó.',
		'research.details.data.label': 'Dữ liệu',
		'research.details.data.value':
			'RAND American Life Panel, một khảo sát toàn quốc với nhân viên toàn thời gian tại Hoa Kỳ',
		'research.details.sample.label': 'Mẫu',
		'research.details.sample.value': 'n = 793',
		'research.details.method.label': 'Phương pháp',
		'research.details.method.value':
			'Multiple linear regression, controlling for age, gender, income, and education',
		'research.details.review.label': 'Tổng quan tài liệu',
		'research.details.review.value': '76 bài viết thực hành về đào tạo và phát triển AI',
		'research.details.output.label': 'Kết quả',
		'research.details.output.value': 'Bốn khuyến nghị đào tạo và phát triển dựa trên bằng chứng',
		'research.details.limitation.label': 'Giới hạn',
		'research.details.limitation.value':
			'Dữ liệu khảo sát quan sát, nên kết quả cho thấy các mối liên hệ thay vì quan hệ nhân quả đã được chứng minh',
		'research.findings.kicker': 'Phát hiện chính',
		'research.findings.title': 'Dữ liệu cho thấy gì.',
		'research.findings.1':
			'Thái độ chủ động với AI là yếu tố bảo vệ mạnh nhất. Những nhân viên tiếp cận AI như một điều để tham gia vào, thay vì một điều xảy ra với họ, báo cáo mức căng thẳng trong công việc thấp hơn sau khi áp dụng.',
		'research.findings.2':
			'Việc tham gia các chương trình đào tạo AI của nhà tuyển dụng, tự thân nó, không liên hệ với mức căng thẳng thấp hơn. Cung cấp đào tạo không đồng nghĩa với việc thay đổi cảm nhận của con người về sự thay đổi.',
		'research.findings.3':
			'Mức độ thành thạo công nghệ nói chung không chuyển hóa thành mức căng thẳng đặc thù với AI thấp hơn. Thoải mái với công nghệ nói chung không bảo vệ con người khỏi áp lực của một đợt triển khai AI mới.',
		'research.findings.4':
			'Trong các yếu tố nhân khẩu học, thu nhập cao hơn đi cùng mức căng thẳng thấp hơn, trong khi trình độ học vấn cao hơn đi cùng mức căng thẳng cao hơn. Gender và age không phải là các yếu tố dự báo có ý nghĩa.',
		'research.findings.5':
			'Hàm ý thực tiễn: đào tạo và phát triển AI nên được thiết kế lại quanh học tập liên tục, tư duy phản biện và phán đoán, đào tạo cấp lãnh đạo, và tùy chỉnh theo công việc cụ thể, để mục tiêu là xây dựng sự tham gia chủ động chứ không chỉ dạy công cụ.',
		'research.access.kicker': 'Công trình',
		'research.access.title': 'Một ghi chú về nghiên cứu này.',
		'research.access.beforeEmail':
			'Đây là một dự án nghiên cứu đồng tác giả, được viết theo hình thức cộng tác. Trang này là bản tóm tắt của bản thảo thay vì toàn văn bài viết. Bản thảo đầy đủ có sẵn khi được yêu cầu: ',
		'research.contact.title': 'Hãy cùng nói về AI và con người.',
		'notFound.meta.title': 'Không tìm thấy trang · Michael Van Horn',
		'notFound.meta.description': 'Không tìm thấy trang bạn đang tìm.',
		'notFound.kicker': 'Lỗi 404',
		'notFound.title': 'Trang này đã đi lạc.',
		'notFound.lead':
			'Trang bạn đang tìm không có ở đây. Có thể trang đã được chuyển đi, hoặc liên kết chưa đầy đủ.',
		'notFound.home': 'Quay về trang chủ',
		'notFound.work': 'Xem các dự án',
		'work.meta.title': 'Công việc · Michael Van Horn',
		'work.meta.description':
			'Các dự án ở ranh giới giữa AI, công việc, và những hệ thống giúp con người tư duy rõ ràng.',
		'work.kicker': 'Công việc',
		'work.heading': 'Những dự án được xây ở ranh giới giữa AI và công việc.',
		'work.intro':
			'Một tuyển tập ngắn các sản phẩm và hệ thống cá nhân tôi đã xây để giúp AI và công việc tri thức trở nên hữu ích hơn.',
		'work.projectsAria': 'Dự án chọn lọc',
		'work.projectsKicker': 'Dự án chọn lọc',
		'work.back': 'Quay lại Công việc',
		'work.metaAria': 'Chi tiết dự án',
		'work.linksAria': 'Liên kết dự án',
		'writing.meta.title': 'Bài viết · Michael Van Horn',
		'writing.meta.description':
			'Ghi chú về AI, công việc, và những con người mà sự thay đổi này ảnh hưởng đến.',
		'writing.kicker': 'Bài viết',
		'writing.heading': 'Ghi chú về AI và tương lai của công việc.',
		'writing.intro':
			'Những bài viết ngắn về áp dụng AI, căng thẳng trong công việc, và việc giữ góc nhìn con người ở trung tâm.',
		'writing.back': 'Quay lại Bài viết',
		'writing.tagsAria': 'Thẻ',
		'writing.medium.title': 'How to Work in Virtual Teams',
		'writing.medium.dek':
			'Về động lực nhóm trong các đội ảo: hình thành, sóng gió, định chuẩn và vận hành, các vai trò mà con người đảm nhận, và cách cộng tác hiệu quả trực tuyến.',
		'writing.medium.meta': 'Bài luận · Medium',
	},
	es: {
		'nav.work': 'Trabajo',
		'nav.writing': 'Escritura',
		'nav.about': 'Sobre mí',
		'nav.contact': 'Contacto',
		'nav.menu': 'Menú',
		'footer.navAria': 'Navegación del pie de página',
		'footer.signoff': '',
		'chrome.skipToContent': 'Saltar al contenido',
		'language.label': 'Idioma',
		'home.meta.title': 'Michael Van Horn · El lado humano de la IA en el trabajo',
		'home.meta.description':
			'Investigador y constructor en HRD. Estudio cómo la adopción de IA transforma el trabajo y el estrés, y construyo las herramientas y marcos que hacen que ese cambio sea humano.',
		'home.hero.kicker': 'El lado humano de la IA en el trabajo',
		'home.hero.heading.before': 'Ayudo a personas y organizaciones a trabajar ',
		'home.hero.heading.emphasis': 'bien',
		'home.hero.heading.after': ' con IA.',
		'home.actions.label': 'Acciones de la página de inicio',
		'home.actions.work': 'Leer el trabajo',
		'home.actions.contact': 'Ponerse en contacto',
		'home.why.aria': 'Por qué este trabajo',
		'home.why.kicker': 'Por qué este trabajo',
		'home.why.statement':
			'Soy Anishinaabe, descendiente de Red Lake Nation, y llegué a la IA a través de las personas: a quién ayuda, a quién deja fuera y cómo las organizaciones acompañan a sus comunidades cuando el trabajo cambia.',
		'home.research.kicker': 'Destacado · Investigación',
		'home.research.title': 'Adopción de IA y estrés laboral',
		'home.research.body':
			'Un manuscrito de OLPD que coescribí sobre cómo los despliegues de IA afectan el estrés de los empleados; fue leído por liderazgo, asignado como lectura obligatoria para el equipo ejecutivo y presentado en la Conferencia de Investigación Estudiantil OLPD 2026 en University of Minnesota. Es el centro de cómo pienso este trabajo.',
		'home.research.cta': 'Leer la investigación',
		'home.work.kicker': 'Trabajo seleccionado',
		'home.work.title': 'Proyectos construidos en el borde entre la IA y el trabajo.',
		'home.work.waaban.blurb': 'Plataforma de análisis de mercado impulsada por IA. Cofundador y CEO.',
		'home.work.markedInRed.blurb':
			'Mapa de concientización sobre Mujeres, Niñas y personas Two-Spirit Indígenas desaparecidas y asesinadas. Definido, diseñado y lanzado de principio a fin.',
		'home.work.woodhouse.blurb':
			'Gestor de tareas construido por mí para reemplazar Asana. Un panel local respaldado por un repositorio privado de GitHub mediante un proxy de Express.',
		'home.work.obsidianAi.blurb':
			'Sistema personal de memoria de IA y agentes con archivos de conocimiento, hooks, skills y una capa de agentes Townfolk.',
		'home.work.cta': 'Ver todo el trabajo',
		'home.opensource.kicker': 'Código abierto',
		'home.opensource.title': 'Construido en público',
		'home.opensource.all': 'Todo',
		'home.opensource.viewOnGitHub': 'ver en GitHub',
		'home.opensource.updated': 'actualizado',
		'home.opensource.archived': 'archivado',
		'home.opensource.descFallback': 'Repositorio de {language}',
		'home.opensource.viewProfile': 'Ver mi GitHub',
		'home.opensource.repo.michaelvanhornMe.description':
			'Sitio de portfolio personal de Michael Van Horn.',
		'home.opensource.repo.markedInRed.description':
			'Mapa de concientización sobre Mujeres, Niñas y personas Two-Spirit Indígenas desaparecidas y asesinadas.',
		'home.writing.kicker': 'Escritura',
		'home.writing.title': 'Notas sobre IA y el futuro del trabajo.',
		'home.writing.body':
			'Textos breves sobre adopción de IA, estrés laboral y mantener el lado humano a la vista.',
		'home.writing.cta': 'Leer la escritura',
		'home.experience.kicker': 'Experiencia',
		'home.experience.title': 'Dónde estoy poniendo este trabajo en práctica.',
		'home.experience.meetMinneapolis.role': 'Equidad e Impacto Comunitario',
		'home.experience.waaban.role': 'Cofundador y CEO',
		'home.experience.resume': 'Descargar currículum (PDF)',
		'home.recommendation.kicker': 'Recomendación',
		'home.recommendation.title': 'Cómo es trabajar conmigo.',
		'home.recommendation.quote1':
			'Es proactivo, confiable y fácil de trabajar; alguien que nota lo que necesita atención y toma iniciativa sin requerir mucha dirección. Una de sus contribuciones más valiosas fue desarrollar un conjunto de pautas de IA para el personal y futuros asistentes estudiantiles, creando claridad sobre cómo abordamos y usamos estas herramientas en nuestro trabajo.',
		'home.recommendation.quote2':
			'Lo recomendaría con confianza para puestos donde importen la claridad, la responsabilidad y el seguimiento. Aportará estructura y mejorará procesos dondequiera que llegue.',
		'home.recommendation.name': 'Sarah Cawthon',
		'home.recommendation.role': 'Gerente de Educación Profesional y Contenido, University of Minnesota',
		'home.recommendation.context': 'Supervisó a Mike en U of M Career Services',
		'home.contact.title': 'Hablemos de IA y personas.',
		'about.meta.title': 'Sobre mí · Michael Van Horn',
		'about.meta.description':
			'Investigador y constructor en HRD que trabaja en el lado humano de la IA en el trabajo; criado en Red Lake Nation y radicado en Twin Cities.',
		'about.kicker': 'Sobre mí',
		'about.hero.title': 'Trabajo en el lado humano de la IA en el lugar de trabajo.',
		'about.hero.lead':
			'Soy investigador y constructor en HRD. Estudio cómo la adopción de IA transforma el trabajo y el estrés, y construyo herramientas y marcos que ayudan a equipos no técnicos a adueñarse del cambio en vez de ser arrastrados por él.',
		'about.resume': 'Descargar currículum (PDF)',
		'about.story.kicker': 'Cómo llegué aquí',
		'about.story.title': 'Primero las personas, luego las herramientas.',
		'about.story.p1':
			'Soy Anishinaabe, descendiente de Red Lake Nation. Crecí en Ponemah y Redby, en la reserva, antes de mudarme a Twin Cities. Ese origen no es una nota al pie de este trabajo; es la razón de hacerlo. Vi desde temprano cómo llega el cambio a una comunidad: a quién sirve, a quién deja atrás y cómo un lugar acompaña a su gente a través de ese cambio. Crecer en Red Lake Nation me enseñó que las organizaciones fuertes empiezan con relaciones, integridad y conciencia cultural. Eso da forma a cómo pienso cada parte del desarrollo de recursos humanos, desde cómo capacitamos a las personas hasta cómo construimos sistemas que realmente las incluyen.',
		'about.story.p2':
			'Mi camino pasa primero por las personas. Llegué a la IA a través del desarrollo de recursos humanos: reclutamiento, incorporación, capacitación y el trabajo cotidiano de ayudar a las personas a encontrar estabilidad cuando sus puestos cambian. En University of Minnesota Career Services, redacté una política formal de uso de IA y un marco de capacitación para la oficina, junto con SOPs para sus funciones principales. Cuanto más veía entrar la IA al lugar de trabajo, más claro se volvía que la parte difícil nunca era la herramienta. Era la confianza, el aprendizaje y si las personas que hacen el trabajo eran acompañadas o dejadas de lado.',
		'about.story.p3':
			'Por eso hago ambas mitades. Coescribí un manuscrito sobre adopción de IA y estrés laboral, presentado en la Conferencia de Investigación Estudiantil OLPD 2026 en University of Minnesota, y construyo sistemas reales: una plataforma de análisis de mercado impulsada por IA, una capa de gobernanza multiagente que mantiene honesta una base de conocimiento y herramientas que dan a equipos no técnicos acceso seguro y en vivo a la IA. La investigación mantiene la construcción centrada en las personas. La construcción mantiene la investigación conectada con lo que realmente se lanza. Las personas profesionales de capacitación y desarrollo deberían liderar la conversación sobre IA en el trabajo, no solo reaccionar a ella.',
		'about.experience.kicker': 'Experiencia',
		'about.experience.title': 'Dónde ocurre el trabajo.',
		'about.experience.meetMinneapolis.role': 'Pasante de Equidad e Impacto Comunitario',
		'about.experience.meetMinneapolis.dates': 'Mar 2026–presente · Minneapolis, MN',
		'about.experience.waaban.role': 'Cofundador y CEO',
		'about.experience.waaban.dates': 'Mar 2026–presente',
		'about.experience.umn.role': 'Asistente de oficina',
		'about.experience.umn.dates': 'Jun 2025–Mar 2026 · Minneapolis, MN',
		'about.experience.redLake.role': 'Pasante de HR & Logistics',
		'about.experience.redLake.dates': 'Ene 2024–Ago 2024 · Red Lake, MN',
		'about.education.kicker': 'Educación',
		'about.education.title': 'Estudié para hacer este trabajo.',
		'about.education.umn.role': 'B.S., Human Resource Development (CEHD / OLPD)',
		'about.education.umn.dates': 'Previsto Dic 2026 · GPA 3.71',
		'about.education.bemidji.role': 'Associate of Arts (AA), Liberal Arts & Sciences (PSEO)',
		'about.education.bemidji.dates': "2022–2024 · Dean's List",
		'about.certifications.kicker': 'Certificaciones',
		'about.certifications.title': 'También me formé en las herramientas.',
		'about.certifications.aiFluency': 'AI Fluency: Framework & Foundations',
		'about.certifications.claude101': 'Claude 101',
		'about.certifications.anthropic': 'Anthropic',
		'about.contact.title': 'Hablemos de IA y personas.',
		'contact.meta.title': 'Contacto · Michael Van Horn',
		'contact.meta.description':
			'Contacta a Michael Van Horn por email o LinkedIn. Radicado en Twin Cities, MN.',
		'contact.kicker': 'Contacto',
		'contact.title': 'Hablemos de IA y personas.',
		'contact.lead':
			'Las mejores formas de contactarme están abajo. Leo todos los mensajes y respondo cuando hay encaje, ya sea colaboración, investigación o un puesto.',
		'contact.channel.email': 'Email',
		'contact.channel.linkedin': 'LinkedIn',
		'contact.channel.github': 'GitHub',
		'contact.channel.location': 'Ubicación',
		'research.meta.title': 'Investigación · AI Adoption & Job Stress · Michael Van Horn',
		'research.meta.description':
			'AI Adoption & Job Stress: un estudio coescrito sobre lo que realmente reduce el estrés de empleados cuando las organizaciones implementan IA. Resumen, métodos y hallazgos clave.',
		'research.hero.kicker': 'Destacado · Investigación',
		'research.hero.title': 'AI Adoption & Job Stress',
		'research.hero.lead':
			'Qué reduce realmente el estrés de empleados cuando una organización implementa IA, y por qué la respuesta tiene menos que ver con la herramienta que con cómo se acompaña a las personas.',
		'research.hero.byline':
			'Un manuscrito OLPD coescrito, presentado en la Conferencia de Investigación Estudiantil OLPD 2026 en University of Minnesota.',
		'research.abstract.kicker': 'Resumen',
		'research.abstract.title': 'La versión breve.',
		'research.abstract.body':
			'Las organizaciones están adoptando IA para ganar eficiencia y reducir costos, a menudo confiando en que empleados aprendan las nuevas herramientas en gran medida por su cuenta. Este estudio examina cómo cambia el estrés laboral después de la adopción de IA en el trabajo y qué factores dan forma a ese cambio. A partir de una encuesta nacional de empleados de tiempo completo en Estados Unidos, prueba si una actitud proactiva hacia la IA, la soltura tecnológica general y la capacitación en IA provista por el empleador se asocian cada una con menor estrés. Una actitud proactiva hacia la IA sobresale como el factor más claramente vinculado con menor estrés; la participación en capacitación y la comodidad general con la tecnología no. Con base en esos resultados, el artículo revisa cómo se practica actualmente la capacitación en IA y propone un rediseño centrado en aprendizaje continuo, pensamiento crítico, capacitación de liderazgo y personalización específica del puesto.',
		'research.approach.kicker': 'Enfoque',
		'research.approach.title': 'Cómo se hizo el estudio.',
		'research.approach.p1':
			'El análisis central es un estudio cuantitativo que usa datos de encuesta nacional del RAND American Life Panel, acotados a empleados de tiempo completo. Usando multiple linear regression, modela el estrés laboral después de la adopción de IA frente a tres factores de interés (actitud proactiva hacia la IA, soltura tecnológica y participación en capacitación de IA provista por el empleador), controlando por age, gender, income, and education.',
		'research.approach.p2':
			'Ese trabajo cuantitativo se combina con una revisión de literatura orientada a la práctica (publicaciones de negocios y gestión) sobre cómo se está ejecutando realmente la capacitación y el desarrollo en IA dentro de las organizaciones. Las dos mitades se conectan: los datos apuntan a lo que reduce el estrés, y la revisión muestra dónde la práctica actual de capacitación no alcanza ese objetivo.',
		'research.details.data.label': 'Datos',
		'research.details.data.value':
			'RAND American Life Panel, una encuesta nacional de empleados de tiempo completo en Estados Unidos',
		'research.details.sample.label': 'Muestra',
		'research.details.sample.value': 'n = 793',
		'research.details.method.label': 'Método',
		'research.details.method.value':
			'Multiple linear regression, controlling for age, gender, income, and education',
		'research.details.review.label': 'Revisión de literatura',
		'research.details.review.value': '76 artículos profesionales sobre capacitación y desarrollo en IA',
		'research.details.output.label': 'Resultado',
		'research.details.output.value': 'Cuatro recomendaciones de capacitación y desarrollo basadas en evidencia',
		'research.details.limitation.label': 'Limitación',
		'research.details.limitation.value':
			'Datos de encuesta observacional, por lo que los resultados muestran asociaciones en lugar de causalidad probada',
		'research.findings.kicker': 'Hallazgos clave',
		'research.findings.title': 'Lo que mostraron los datos.',
		'research.findings.1':
			'Una actitud proactiva hacia la IA fue el factor protector más fuerte. Empleados que abordaron la IA como algo con lo que involucrarse, en vez de algo que les ocurría, reportaron menor estrés laboral después de la adopción.',
		'research.findings.2':
			'La participación en programas de capacitación en IA del empleador no estuvo, por sí sola, asociada con menor estrés. Ofrecer capacitación no era lo mismo que cambiar cómo las personas se sentían ante el cambio.',
		'research.findings.3':
			'La soltura tecnológica general no se tradujo en menor estrés específico de IA. Sentirse cómodo con la tecnología en general no protegió a las personas de la tensión de una nueva implementación de IA.',
		'research.findings.4':
			'Entre los factores demográficos, mayores ingresos se asociaron con menor estrés, mientras que mayor nivel educativo se asoció con mayor estrés. Gender y age no fueron predictores significativos.',
		'research.findings.5':
			'La implicación práctica: la capacitación y el desarrollo en IA deberían rediseñarse alrededor del aprendizaje continuo, el pensamiento crítico y el juicio, la capacitación a nivel de liderazgo y la personalización específica del puesto, para que el objetivo sea construir participación proactiva, no solo enseñar la herramienta.',
		'research.access.kicker': 'El trabajo',
		'research.access.title': 'Una nota sobre esta investigación.',
		'research.access.beforeEmail':
			'Este es un proyecto de investigación coescrito, redactado de forma colaborativa. Esta página es un resumen del manuscrito, no el artículo completo. El manuscrito completo está disponible a solicitud: ',
		'research.contact.title': 'Hablemos de IA y personas.',
		'notFound.meta.title': 'Página no encontrada · Michael Van Horn',
		'notFound.meta.description': 'No se pudo encontrar la página que buscabas.',
		'notFound.kicker': 'Error 404',
		'notFound.title': 'Esta página se desvió.',
		'notFound.lead':
			'La página que buscabas no está aquí. Puede haberse movido, o el enlace puede estar incompleto.',
		'notFound.home': 'Volver al inicio',
		'notFound.work': 'Ver el trabajo',
		'work.meta.title': 'Trabajo · Michael Van Horn',
		'work.meta.description':
			'Proyectos en el borde entre la IA, el trabajo y los sistemas que ayudan a las personas a pensar con claridad.',
		'work.kicker': 'Trabajo',
		'work.heading': 'Proyectos construidos en el borde entre la IA y el trabajo.',
		'work.intro':
			'Una breve colección de productos y sistemas personales que he construido para hacer la IA y el trabajo de conocimiento más útiles.',
		'work.projectsAria': 'Proyectos seleccionados',
		'work.projectsKicker': 'Proyectos seleccionados',
		'work.back': 'Volver a Trabajo',
		'work.metaAria': 'Detalles del proyecto',
		'work.linksAria': 'Enlaces del proyecto',
		'writing.meta.title': 'Escritura · Michael Van Horn',
		'writing.meta.description': 'Notas sobre IA, el trabajo y las personas a quienes afecta el cambio.',
		'writing.kicker': 'Escritura',
		'writing.heading': 'Notas sobre IA y el futuro del trabajo.',
		'writing.intro':
			'Textos breves sobre adopción de IA, estrés laboral y mantener el lado humano a la vista.',
		'writing.back': 'Volver a Escritura',
		'writing.tagsAria': 'Etiquetas',
		'writing.medium.title': 'How to Work in Virtual Teams',
		'writing.medium.dek':
			'Sobre la dinámica de grupo en equipos virtuales: formación, conflicto, normalización y desempeño, los roles que asumen las personas y cómo colaborar bien en línea.',
		'writing.medium.meta': 'Ensayo · Medium',
	},
	oj: {
		'nav.work': 'Anokiiwin',
		'nav.writing': "Ozhibii'igan",
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'nav.menu': 'Menu',
		'footer.navAria': 'Footer navigation',
		'footer.signoff': 'Miigwech',
		'chrome.skipToContent': 'Skip to content',
		'language.label': 'Language',
		'home.meta.title': 'Michael Van Horn · The human side of AI in the workplace',
		'home.meta.description':
			'HRD researcher and builder. I study how AI adoption reshapes work and stress, and I build the tools and frameworks that make the shift humane.',
		'home.hero.kicker': 'Boozhoo · The human side of AI in the workplace',
		'home.hero.heading.before': 'I help people and organizations work ',
		'home.hero.heading.emphasis': 'well',
		'home.hero.heading.after': ' with AI.',
		'home.actions.label': 'Homepage actions',
		'home.actions.work': 'Read the work',
		'home.actions.contact': 'Get in touch',
		'home.why.aria': 'Why this work',
		'home.why.kicker': 'Why this work',
		'home.why.statement':
			"Boozhoo. I'm Anishinaabe, a descendant of Miskwaagamiiwi-zaaga'igan (Red Lake Nation), and I came to AI through people: who it helps, who it leaves out, and how organizations bring their communities along as work changes.",
		'home.research.kicker': 'Featured · Research',
		'home.research.title': 'AI Adoption & Job Stress',
		'home.research.body':
			'An OLPD manuscript I co-authored on how AI rollouts affect employee stress, read by leadership, made required reading for the executive team, and presented at the 2026 OLPD Student Research Conference at the University of Minnesota. The center of how I think about this work.',
		'home.research.cta': 'Read the research',
		'home.work.kicker': 'Selected work',
		'home.work.title': 'Built projects at the edge of AI and work.',
		'home.work.waaban.blurb': 'AI-powered market-analysis platform. Co-founder & CEO.',
		'home.work.markedInRed.blurb':
			'Awareness map for Missing and Murdered Indigenous Women, Girls, and Two-Spirit people. Scoped, designed, and shipped end to end.',
		'home.work.woodhouse.blurb':
			'Self-built task manager replacing Asana. A local dashboard backed by a private GitHub repo via an Express proxy.',
		'home.work.obsidianAi.blurb':
			'Personal AI memory + agent system with knowledge files, hooks, skills, and a Townfolk agent layer.',
		'home.work.cta': 'See all work',
		'home.writing.kicker': 'Writing',
		'home.writing.title': 'Notes on AI and the future of work.',
		'home.writing.body': 'Short pieces on AI adoption, job stress, and keeping the human side in view.',
		'home.writing.cta': 'Read the writing',
		'home.experience.kicker': 'Experience',
		'home.experience.title': 'Where I am putting the work into practice.',
		'home.experience.meetMinneapolis.role': 'Equity & Community Impact',
		'home.experience.waaban.role': 'Co-founder & CEO',
		'home.experience.resume': 'Download résumé (PDF)',
		'home.recommendation.kicker': 'Recommendation',
		'home.recommendation.title': "What it's like to work with me.",
		'home.recommendation.quote1':
			"He's proactive, reliable, and easy to work with, someone who notices what needs attention and takes initiative without needing much direction. One of the most valuable contributions he made was developing a set of AI guidelines for staff and future student office assistants, creating clarity around how we approach and use these tools in our work.",
		'home.recommendation.quote2':
			"I'd confidently recommend him for roles where clarity, ownership, and follow-through matter. He'll bring structure and make processes better wherever he lands.",
		'home.recommendation.name': 'Sarah Cawthon',
		'home.recommendation.role': 'Career Education & Content Manager, University of Minnesota',
		'home.recommendation.context': 'Supervised Mike at U of M Career Services',
		'home.contact.title': "Let's talk about AI and people.",
		'about.meta.title': 'About · Michael Van Horn',
		'about.meta.description':
			'HRD researcher and builder working on the human side of AI in the workplace, raised on the Red Lake Nation and based in the Twin Cities.',
		'about.kicker': 'About',
		'about.hero.title': 'I work on the human side of AI in the workplace.',
		'about.hero.lead':
			'I am an HRD researcher and builder. I study how AI adoption reshapes work and stress, and I build the tools and frameworks that help non-technical teams own the change instead of being run over by it.',
		'about.resume': 'Download résumé (PDF)',
		'about.story.kicker': 'How I got here',
		'about.story.title': 'People first, then the tools.',
		'about.story.p1':
			"Boozhoo. I am Anishinaabe, a descendant of the Red Lake Nation, Miskwaagamiiwi-zaaga'igan. I grew up in Obaashiing (Ponemah) and Redby on the reservation before moving to the Twin Cities. That background is not a footnote to this work; it is the reason for it. I saw early how change arrives in a community: who it serves, who it leaves behind, and how a place carries its people through it. Growing up on the Red Lake Nation taught me that strong organizations start with relationships, integrity, and cultural awareness. That shapes how I think about every part of human resource development, from how we train people to how we build systems that actually include them.",
		'about.story.p2':
			'My path runs through people first. I came to AI through human resource development: recruiting, onboarding, training, and the daily work of helping people find footing when their jobs change. Working in University of Minnesota Career Services, I authored a formal AI usage policy and training framework for the office, alongside SOPs for its core functions. The more I watched AI enter the workplace, the clearer it became that the hard part was never the tool. It was trust, learning, and whether the people doing the work were brought along or pushed aside.',
		'about.story.p3':
			'So I do both halves. I co-authored a manuscript on AI adoption and job stress, presented at the 2026 OLPD Student Research Conference at the University of Minnesota, and I build real systems: an AI-powered market-analysis platform, a multi-agent governance layer that keeps a knowledge base honest, and tools that give non-technical teams safe, live access to AI. The research keeps the building grounded in people. The building keeps the research grounded in what actually ships. Training-and-development professionals should be leading the conversation about AI at work, not just reacting to it.',
		'about.experience.kicker': 'Experience',
		'about.experience.title': 'Where the work happens.',
		'about.experience.meetMinneapolis.role': 'Equity & Community Impact Intern',
		'about.experience.meetMinneapolis.dates': 'Mar 2026–present · Minneapolis, MN',
		'about.experience.waaban.role': 'Co-founder & CEO',
		'about.experience.waaban.dates': 'Mar 2026–present',
		'about.experience.umn.role': 'Office Assistant',
		'about.experience.umn.dates': 'Jun 2025–Mar 2026 · Minneapolis, MN',
		'about.experience.redLake.role': 'HR & Logistics Intern',
		'about.experience.redLake.dates': 'Jan 2024–Aug 2024 · Red Lake, MN',
		'about.education.kicker': 'Education',
		'about.education.title': 'Studied to do this work.',
		'about.education.umn.role': 'B.S., Human Resource Development (CEHD / OLPD)',
		'about.education.umn.dates': 'Expected Dec 2026 · GPA 3.71',
		'about.education.bemidji.role': 'Associate of Arts (AA), Liberal Arts & Sciences (PSEO)',
		'about.education.bemidji.dates': "2022–2024 · Dean's List",
		'about.certifications.kicker': 'Certifications',
		'about.certifications.title': 'Trained on the tools, too.',
		'about.certifications.aiFluency': 'AI Fluency: Framework & Foundations',
		'about.certifications.claude101': 'Claude 101',
		'about.certifications.anthropic': 'Anthropic',
		'about.contact.title': "Let's talk about AI and people.",
		'contact.meta.title': 'Contact · Michael Van Horn',
		'contact.meta.description':
			'Reach Michael Van Horn by email or LinkedIn. Based in the Twin Cities, MN.',
		'contact.kicker': 'Contact',
		'contact.title': "Let's talk about AI and people.",
		'contact.lead':
			"The best ways to reach me are below. I read every message and reply whenever there's a fit, whether that's collaboration, research, or a role.",
		'contact.channel.email': 'Email',
		'contact.channel.linkedin': 'LinkedIn',
		'contact.channel.github': 'GitHub',
		'contact.channel.location': 'Location',
		'research.meta.title': 'Research · AI Adoption & Job Stress · Michael Van Horn',
		'research.meta.description':
			'AI Adoption & Job Stress: a co-authored study on what actually reduces employee stress when organizations roll out AI. Summary, methods, and key findings.',
		'research.hero.kicker': 'Featured · Research',
		'research.hero.title': 'AI Adoption & Job Stress',
		'research.hero.lead':
			'What actually reduces employee stress when an organization rolls out AI, and why the answer has less to do with the tool than with how people are brought along.',
		'research.hero.byline':
			'A co-authored OLPD manuscript, presented at the 2026 OLPD Student Research Conference at the University of Minnesota.',
		'research.abstract.kicker': 'Abstract',
		'research.abstract.title': 'The short version.',
		'research.abstract.body':
			'Organizations are adopting AI to gain efficiency and cut costs, often relying on employees to learn the new tools largely on their own. This study examines how job stress changes after workplace AI adoption, and which factors shape that change. Drawing on a national survey of full-time U.S. employees, it tests whether a proactive attitude toward AI, general technological savvy, and employer-provided AI training are each associated with lower stress. A proactive attitude toward AI stands out as the factor most clearly linked to lower stress; training participation and general tech comfort are not. Building on those results, the paper reviews how AI training is currently practiced and proposes a redesign centered on continuous learning, critical thinking, leadership training, and job-specific customization.',
		'research.approach.kicker': 'Approach',
		'research.approach.title': 'How the study was done.',
		'research.approach.p1':
			'The core analysis is a quantitative study using national survey data from the RAND American Life Panel, narrowed to full-time employees. Using multiple linear regression, it models job stress after AI adoption against three factors of interest (proactive attitude toward AI, technological savvy, and participation in employer AI training) while controlling for age, gender, income, and education.',
		'research.approach.p2':
			'That quantitative work is paired with a review of practitioner-oriented literature (business and management publications) on how AI training and development is actually being run inside organizations. The two halves connect: the data points to what reduces stress, and the review surfaces where current training practice falls short of it.',
		'research.details.data.label': 'Data',
		'research.details.data.value':
			'RAND American Life Panel, a national survey of full-time U.S. employees',
		'research.details.sample.label': 'Sample',
		'research.details.sample.value': 'n = 793',
		'research.details.method.label': 'Method',
		'research.details.method.value':
			'Multiple linear regression, controlling for age, gender, income, and education',
		'research.details.review.label': 'Literature review',
		'research.details.review.value': '76 practitioner articles on AI training and development',
		'research.details.output.label': 'Output',
		'research.details.output.value': 'Four evidence-based training-and-development recommendations',
		'research.details.limitation.label': 'Limitation',
		'research.details.limitation.value':
			'Observational survey data, so results show associations rather than proven causation',
		'research.findings.kicker': 'Key findings',
		'research.findings.title': 'What the data showed.',
		'research.findings.1':
			'A proactive attitude toward AI was the strongest protective factor. Employees who approached AI as something to engage with, rather than something happening to them, reported lower job stress after adoption.',
		'research.findings.2':
			'Participation in employer AI training programs was not, on its own, associated with lower stress. Offering training was not the same as changing how people felt about the change.',
		'research.findings.3':
			'General technological savvy did not transfer to lower AI-specific stress. Being comfortable with technology in general did not protect people from the strain of a new AI rollout.',
		'research.findings.4':
			'Among demographic factors, higher income tracked with lower stress, while higher educational attainment tracked with higher stress. Gender and age were not significant predictors.',
		'research.findings.5':
			'The practical implication: AI training and development should be redesigned around continuous learning, critical thinking and judgment, leadership-level training, and job-specific customization, so the goal is building proactive engagement, not just teaching the tool.',
		'research.access.kicker': 'The work',
		'research.access.title': 'A note on this research.',
		'research.access.beforeEmail':
			'This is a co-authored research project, written collaboratively. This page is a summary of the manuscript rather than the full paper. The full manuscript is available on request: ',
		'research.contact.title': "Let's talk about AI and people.",
		'notFound.meta.title': 'Page not found · Michael Van Horn',
		'notFound.meta.description': 'The page you were looking for could not be found.',
		'notFound.kicker': 'Error 404',
		'notFound.title': 'This page wandered off.',
		'notFound.lead':
			'The page you were looking for is not here. It may have moved, or the link may be incomplete.',
		'notFound.home': 'Back to home',
		'notFound.work': 'See the work',
		'work.meta.title': 'Work · Michael Van Horn',
		'work.meta.description':
			'Projects at the edge of AI, work, and the systems that help people think clearly.',
		'work.kicker': 'Work',
		'work.heading': 'Built projects at the edge of AI and work.',
		'work.intro':
			'A short collection of products and personal systems I have built to make AI and knowledge work more useful.',
		'work.back': 'Back to work',
		'work.metaAria': 'Project details',
		'work.linksAria': 'Project links',
		'writing.meta.title': 'Writing · Michael Van Horn',
		'writing.meta.description': 'Notes on AI, work, and the people the shift affects.',
		'writing.kicker': 'Writing',
		'writing.heading': 'Notes on AI and the future of work.',
		'writing.intro': 'Short pieces on AI adoption, job stress, and keeping the human side in view.',
		'writing.back': 'Back to writing',
		'writing.tagsAria': 'Tags',
		'writing.medium.title': 'How to Work in Virtual Teams',
		'writing.medium.dek':
			'On virtual-team group dynamics: forming, storming, norming, and performing, the roles people play, and how to collaborate well online.',
		'writing.medium.meta': 'Essay · Medium',
	}
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function isLocale(value: string | undefined): value is Locale {
	return value !== undefined && localeSet.has(value);
}

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = cleanPath(url.pathname).split('/');
	return isLocale(lang) ? lang : defaultLang;
}

export function useTranslations(lang: Locale) {
	return function t(key: TranslationKey): string {
		const localeUi = ui[lang] as Partial<Record<TranslationKey, string>>;
		return localeUi[key] ?? ui[defaultLang][key];
	};
}

export function stripLocalePrefix(path: string): string {
	const normalizedPath = cleanPath(path);
	const parts = normalizedPath.split('/');
	const maybeLocale = parts[1];

	if (isLocale(maybeLocale) && maybeLocale !== defaultLang) {
		const stripped = `/${parts.slice(2).join('/')}`;
		return stripped === '/' ? '/' : stripped.replace(/\/$/, '');
	}

	return normalizedPath;
}

export function localizePath(path: string, lang: Locale): string {
	const barePath = stripLocalePrefix(path);

	if (lang === defaultLang) {
		return barePath;
	}

	return barePath === '/' ? `/${lang}` : `/${lang}${barePath}`;
}

export function switchLocalePath(currentPath: string, targetLang: Locale): string {
	return localizePath(stripLocalePrefix(currentPath), targetLang);
}

// Derive the locale and base slug from a content-collection entry id.
// English entries live flat (id "waaban" -> en); translated entries live under
// a locale subdir (id "vi/waaban" -> vi + "waaban").
export function localeFromEntryId(id: string): { locale: Locale; slug: string } {
	const [maybePrefix, ...rest] = id.split('/');
	if (rest.length > 0 && isLocale(maybePrefix) && maybePrefix !== defaultLang) {
		return { locale: maybePrefix, slug: rest.join('/') };
	}
	return { locale: defaultLang, slug: id };
}
