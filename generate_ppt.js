const PptxGenJS = require('pptxgenjs');

// 创建PPT对象
const pptx = new PptxGenJS();

// 设置演示文稿属性
pptx.title = 'TRAE AI编程工具培训';
pptx.author = 'TRAE Team';

// 定义颜色主题（基于HTML文件的紫色渐变主题）
const colors = {
    primary: '667eea',
    secondary: '764ba2',
    dark: '333333',
    light: 'f5f7fa',
    white: 'ffffff',
    gray: '999999'
};

// 幻灯片1：封面页
const slide1 = pptx.addSlide();
slide1.background = { color: '667eea' };
slide1.addText('🚀', { x: 4, y: 1, w: 2, h: 1.5, fontSize: 72, align: 'center', color: 'ffffff' });
slide1.addText('TRAE', { x: 1, y: 2.5, w: 8, h: 1, fontSize: 72, bold: true, align: 'center', color: 'ffffff' });
slide1.addText('The Real AI Engineer', { x: 1, y: 3.5, w: 8, h: 0.6, fontSize: 32, align: 'center', color: 'ffffff' });
slide1.addText('AI原生集成开发环境 · 提升编程效率与质量', { x: 1, y: 4.5, w: 8, h: 0.5, fontSize: 20, align: 'center', color: 'ffffff' });
slide1.addText('字节跳动推出 · 国内首个AI IDE', { x: 1, y: 5.2, w: 8, h: 0.5, fontSize: 20, align: 'center', color: 'ffffff' });

// 幻灯片2：什么是TRAE？
const slide2 = pptx.addSlide();
slide2.addText('什么是TRAE？', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });
slide2.addText('The Real AI Engineer — 真正的AI工程师', { x: 0.5, y: 1.5, w: 9, h: 0.5, fontSize: 24, color: '667eea', bold: true });
slide2.addText('TRAE是由字节跳动推出的国内首个AI原生集成开发环境（AI IDE），旨在通过AI技术提升开发者的编程效率和质量。', { x: 0.5, y: 2.2, w: 9, h: 0.8, fontSize: 18, color: '555555' });

// 添加卡片
const cards2 = [
    { title: '🎯 核心定位', content: '能听懂你说话并快速完成代码开发实现的AI助手' },
    { title: '📅 发布时间', content: '国内版于2025年3月3日正式发布' },
    { title: '🤖 模型支持', content: '搭载豆包1.5 Pro，支持切换满血版DeepSeek R1&V3' },
    { title: '🌐 官网地址', content: '国内版：https://www.trae.com.cn/\n国际版：https://www.trae.ai/' }
];

cards2.forEach((card, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;
    slide2.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 3.2 + row * 1.8, w: 4.5, h: 1.6, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide2.addText(card.title, { x: 0.7 + col * 4.8, y: 3.3 + row * 1.8, w: 4.1, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide2.addText(card.content, { x: 0.7 + col * 4.8, y: 3.7 + row * 1.8, w: 4.1, h: 1.0, fontSize: 16, color: '555555' });
});

// 幻灯片3：TRAE面向的用户群体
const slide3 = pptx.addSlide();
slide3.addText('TRAE面向的用户群体', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });

const cards3 = [
    { title: '💻 专业开发者', content: '提供智能代码补全、Bug修复、代码优化等高级功能，帮助提升编码效率和质量。适用于Web应用开发、工具类应用构建、游戏开发等场景。' },
    { title: '🎨 非技术背景用户', content: '通过自然语言交互和Builder模式，无需编程基础即可快速实现项目原型，如定制化游戏、日程管理工具等。' },
    { title: '🇨🇳 中文开发者', content: '国内版专为中国开发者优化，提供完整的中文界面、代码注释支持，内置豆包1.5 Pro和DeepSeek R1/V3等本地化模型。' },
    { title: '🌍 海外开发者', content: '国际版支持英文界面，集成全球主流模型（如GPT-4o），同时兼容中文输入，满足跨语言开发需求。' },
    { title: '👥 开发团队与初创企业', content: '动态协作功能和项目管理工具支持多任务并行处理，帮助团队高效协作，缩短项目周期。', span: true }
];

cards3.forEach((card, index) => {
    let row, col, width;
    if (card.span) {
        row = 2;
        col = 0;
        width = 9;
    } else {
        row = Math.floor(index / 2);
        col = index % 2;
        width = 4.5;
    }
    slide3.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 1.5 + row * 1.9, w: width - 0.3, h: 1.7, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide3.addText(card.title, { x: 0.7 + col * 4.8, y: 1.6 + row * 1.9, w: width - 0.7, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide3.addText(card.content, { x: 0.7 + col * 4.8, y: 2.0 + row * 1.9, w: width - 0.7, h: 1.2, fontSize: 16, color: '555555' });
});

// 幻灯片4：核心功能亮点
const slide4 = pptx.addSlide();
slide4.addText('核心功能亮点', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });

const sections4 = [
    { title: '1️⃣ 动态协作与AI交互', items: ['Builder模式：通过自然语言描述需求，AI自动生成完整项目框架', 'Chat模式：支持实时问答、代码解释、错误修复，提供多模态交互'] },
    { title: '2️⃣ 智能化编码支持', items: ['实时代码补全与优化：基于上下文分析，预测并补全代码', '代码片段生成：通过自然语言指令生成跨文件的项目级代码'] },
    { title: '3️⃣ 多模态与跨平台能力', items: ['支持图片上传生成代码（如设计草图转前端页面）', 'IDE内直接预览Web页面效果', '目前支持macOS，Windows版本正在开发中'] }
];

sections4.forEach((section, index) => {
    slide4.addText(section.title, { x: 0.5, y: 1.5 + index * 2.0, w: 9, h: 0.5, fontSize: 28, bold: true, color: '667eea' });
    section.items.forEach((item, itemIndex) => {
        slide4.addText(`▸ ${item}`, { x: 0.8, y: 2.0 + index * 2.0 + itemIndex * 0.4, w: 8.7, h: 0.35, fontSize: 18, color: '555555' });
    });
});

// 幻灯片5：核心功能亮点（续）
const slide5 = pptx.addSlide();
slide5.addText('核心功能亮点（续）', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });

slide5.addText('4️⃣ 集成主流AI模型', { x: 0.5, y: 1.5, w: 9, h: 0.5, fontSize: 28, bold: true, color: '667eea' });
slide5.addText('内置免费模型（豆包1.5 Pro、DeepSeek R1/V3）及国际模型（GPT-4o、Claude-3.5），用户可灵活切换', { x: 0.5, y: 2.0, w: 9, h: 0.6, fontSize: 18, color: '555555' });

slide5.addText('5️⃣ 开发环境无缝迁移', { x: 0.5, y: 2.8, w: 9, h: 0.5, fontSize: 28, bold: true, color: '667eea' });
slide5.addText('支持从VS Code或Cursor导入配置、插件及快捷键，降低切换成本', { x: 0.5, y: 3.3, w: 9, h: 0.6, fontSize: 18, color: '555555' });

const features5 = [
    { icon: '⚡', title: '高效协作', desc: '动态协作功能' },
    { icon: '🎯', title: '智能补全', desc: '上下文感知' },
    { icon: '🖼️', title: '多模态', desc: '图片转代码' },
    { icon: '🤖', title: '多模型', desc: '灵活切换' },
    { icon: '🔄', title: '无缝迁移', desc: '配置导入' },
    { icon: '🌐', title: '跨平台', desc: '多系统支持' }
];

features5.forEach((feature, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    slide5.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 3.2, y: 4.2 + row * 1.3, w: 3.0, h: 1.1, 
        fill: { color: 'f8f9fa' }, line: { color: '667eea', width: 2 } 
    });
    slide5.addText(feature.icon, { x: 1.0 + col * 3.2, y: 4.3 + row * 1.3, w: 0.5, h: 0.4, fontSize: 32, align: 'center' });
    slide5.addText(feature.title, { x: 1.6 + col * 3.2, y: 4.3 + row * 1.3, w: 1.9, h: 0.4, fontSize: 16, bold: true, color: '667eea' });
    slide5.addText(feature.desc, { x: 0.7 + col * 3.2, y: 4.7 + row * 1.3, w: 2.6, h: 0.5, fontSize: 14, color: '555555', align: 'center' });
});

// 幻灯片6：重要插件介绍
const slide6 = pptx.addSlide();
slide6.addText('重要插件介绍', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });
slide6.addText('TRAE支持丰富的插件生态，以下是几个核心插件：', { x: 0.5, y: 1.5, w: 9, h: 0.4, fontSize: 18, color: '555555' });

const plugins6 = [
    { title: '🛠️ 代码生成插件', content: '基于AI的智能代码生成，支持多种编程语言，可根据自然语言描述生成完整代码结构' },
    { title: '🔍 代码分析插件', content: '自动分析代码质量，检测潜在问题，提供优化建议，提升代码可维护性' },
    { title: '📦 依赖管理插件', content: '智能识别项目依赖，自动添加缺失依赖，更新过时依赖，确保项目环境稳定' },
    { title: '🌐 版本控制插件', content: '集成Git等版本控制系统，提供可视化操作界面，简化代码管理流程' },
    { title: '🧪 测试生成插件', content: '自动生成单元测试代码，提高测试覆盖率，确保代码质量' },
    { title: '🎨 UI设计插件', content: '支持从设计稿生成前端代码，实现设计与开发的无缝衔接' }
];

plugins6.forEach((plugin, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;
    slide6.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 2.1 + row * 1.6, w: 4.5, h: 1.4, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide6.addText(plugin.title, { x: 0.7 + col * 4.8, y: 2.2 + row * 1.6, w: 4.1, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide6.addText(plugin.content, { x: 0.7 + col * 4.8, y: 2.6 + row * 1.6, w: 4.1, h: 0.8, fontSize: 16, color: '555555' });
});

// 幻灯片7：插件详细介绍
const slide7 = pptx.addSlide();
slide7.addText('插件详细介绍', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });
slide7.addText('TRAE支持多种实用插件，以下是几个重点推荐：', { x: 0.5, y: 1.5, w: 9, h: 0.4, fontSize: 18, color: '555555' });

const plugins7 = [
    { title: '📄 1. Mintlify 代码转换文档', content: '将代码自动转换为文档，生成清晰的API文档和使用说明，提高代码可维护性' },
    { title: '📋 2. Kimi 长文档提炼', content: '快速总结长文档内容，提取重点信息，生成摘要，提高阅读效率' },
    { title: '🐛 3. DeepSeek 调试分析', content: '自动分析代码错误，查找Bug原因，提供修复建议，加速调试过程' },
    { title: '❌ 4. CodeWhisperer (Amazon)', content: '注意：此插件目前不可用' },
    { title: '💡 5. Tabnine', content: '智能代码补全插件，需购买使用，提供高级代码预测功能', span: true }
];

plugins7.forEach((plugin, index) => {
    let row, col, width;
    if (plugin.span) {
        row = 2;
        col = 0;
        width = 9;
    } else {
        row = Math.floor(index / 2);
        col = index % 2;
        width = 4.5;
    }
    slide7.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 2.1 + row * 1.6, w: width - 0.3, h: 1.4, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide7.addText(plugin.title, { x: 0.7 + col * 4.8, y: 2.2 + row * 1.6, w: width - 0.7, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide7.addText(plugin.content, { x: 0.7 + col * 4.8, y: 2.6 + row * 1.6, w: width - 0.7, h: 0.8, fontSize: 16, color: '555555' });
});

// 幻灯片8：Skills技能
const slide8 = pptx.addSlide();
slide8.addText('Skills技能', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });
slide8.addText('TRAE的Skills功能允许用户创建和使用自定义技能，扩展IDE的能力：', { x: 0.5, y: 1.5, w: 9, h: 0.4, fontSize: 18, color: '555555' });

const skills8 = [
    { title: '🛠️ 创建技能', content: '通过Builder模式或手动编写代码，创建自定义技能，实现特定功能' },
    { title: '📦 技能管理', content: '在技能中心管理已创建的技能，包括启用、禁用、编辑和删除' },
    { title: '🔄 技能调用', content: '在对话中显式调用或者对话会自动根据描述调用' },
    { title: '🌐 技能共享', content: '将创建的技能分享给团队成员，实现协作开发' },
    { title: '💡 技能示例pptx', content: '代码格式化、文档生成、测试用例创建、代码重构等实用技能\n参考：https://github.com/anthropics/skills', span: true }
];

skills8.forEach((skill, index) => {
    let row, col, width;
    if (skill.span) {
        row = 2;
        col = 0;
        width = 9;
    } else {
        row = Math.floor(index / 2);
        col = index % 2;
        width = 4.5;
    }
    slide8.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 2.1 + row * 1.6, w: width - 0.3, h: 1.4, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide8.addText(skill.title, { x: 0.7 + col * 4.8, y: 2.2 + row * 1.6, w: width - 0.7, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide8.addText(skill.content, { x: 0.7 + col * 4.8, y: 2.6 + row * 1.6, w: width - 0.7, h: 0.8, fontSize: 16, color: '555555' });
});

// 幻灯片9：典型应用场景
const slide9 = pptx.addSlide();
slide9.addText('典型应用场景', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });

const scenarios9 = [
    { title: '🌐 Web应用开发', content: '快速生成前后端代码，实现图片上传、数据压缩等功能，并提供界面设计建议' },
    { title: '🔧 工具类应用', content: '如图片处理工具、格式转换器等，通过自然语言指令完成核心逻辑开发' },
    { title: '🎮 游戏开发', content: '生成贪吃蛇、汉诺塔等小游戏代码，自动处理界面绘制与交互逻辑' },
    { title: '💻 日常编程辅助', content: '解释代码含义、优化结构、添加注释，或修复复杂Bug' },
    { title: '📚 教育与学习', content: '非技术用户可通过TRAE快速运行开源项目，理解代码逻辑（如翻译界面、添加功能）', span: true }
];

scenarios9.forEach((scenario, index) => {
    let row, col, width;
    if (scenario.span) {
        row = 2;
        col = 0;
        width = 9;
    } else {
        row = Math.floor(index / 2);
        col = index % 2;
        width = 4.5;
    }
    slide9.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + col * 4.8, y: 1.5 + row * 1.6, w: width - 0.3, h: 1.4, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide9.addText(scenario.title, { x: 0.7 + col * 4.8, y: 1.6 + row * 1.6, w: width - 0.7, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    slide9.addText(scenario.content, { x: 0.7 + col * 4.8, y: 2.0 + row * 1.6, w: width - 0.7, h: 0.8, fontSize: 16, color: '555555' });
});

// 幻灯片10：集成的AI模型
const slide10 = pptx.addSlide();
slide10.addText('集成的AI模型', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });

const models10 = [
    { title: '🇨🇳 国内版模型', tags: ['豆包1.5 Pro', 'DeepSeek R1', 'DeepSeek V3'], desc: '支持满血版推理能力' },
    { title: '🌍 国际版模型', tags: ['GPT-4o', 'Claude-3.5-Sonnet', 'Claude-3.7-Sonnet'], desc: '支持Chat模式、Builder模式、图片理解' }
];

models10.forEach((model, index) => {
    slide10.addShape(pptx.ShapeType.rect, { 
        x: 0.5 + index * 4.8, y: 1.5, w: 4.5, h: 2.0, 
        fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
    });
    slide10.addText(model.title, { x: 0.7 + index * 4.8, y: 1.6, w: 4.1, h: 0.4, fontSize: 20, bold: true, color: '333333' });
    model.tags.forEach((tag, tagIndex) => {
        slide10.addShape(pptx.ShapeType.rect, { 
            x: 0.7 + index * 4.8, y: 2.0 + tagIndex * 0.35, w: 2.0, h: 0.3, 
            fill: { color: '667eea' } 
        });
        slide10.addText(tag, { x: 0.8 + index * 4.8, y: 2.05 + tagIndex * 0.35, w: 1.8, h: 0.2, fontSize: 14, color: 'ffffff', align: 'center' });
    });
    slide10.addText(model.desc, { x: 0.7 + index * 4.8, y: 3.1, w: 4.1, h: 0.3, fontSize: 16, color: '555555' });
});

slide10.addText('📋 实操案例', { x: 0.5, y: 3.8, w: 9, h: 0.5, fontSize: 28, bold: true, color: '667eea' });

const cases10 = [
    { title: '案例一：井字棋游戏', content: '使用GLM-4.7，完成"井字棋"游戏的代码生成' },
    { title: '案例二：俄罗斯方块游戏', content: '通过SOLO模式输入需求，自动生成包含7种经典形状、颜色区分、键盘控制的完整游戏代码' }
];

cases10.forEach((caseItem, index) => {
    slide10.addShape(pptx.ShapeType.rect, { 
        x: 0.5, y: 4.5 + index * 1.3, w: 9, h: 1.1, 
        fill: { color: 'f9f9f9' }, line: { color: '667eea', width: 2 } 
    });
    slide10.addText(caseItem.title, { x: 0.7, y: 4.6 + index * 1.3, w: 8.6, h: 0.4, fontSize: 18, bold: true, color: '667eea' });
    slide10.addText(caseItem.content, { x: 0.7, y: 5.0 + index * 1.3, w: 8.6, h: 0.5, fontSize: 16, color: '555555' });
});

// 幻灯片11：总结
const slide11 = pptx.addSlide();
slide11.addText('总结', { x: 0.5, y: 0.5, w: 9, h: 0.8, fontSize: 44, bold: true, color: '667eea' });
slide11.addText('TRAE作为国内首个AI原生集成开发环境，通过以下核心优势为开发者赋能：', { x: 0.5, y: 1.5, w: 9, h: 0.5, fontSize: 18, color: '555555' });

const summary11 = [
    '智能化：AI驱动的代码生成、补全、优化和调试',
    '易用性：自然语言交互，降低编程门槛',
    '多模态：支持文字、图片等多种输入方式',
    '灵活性：多模型支持，满足不同需求',
    '协作性：团队协作功能，提升开发效率'
];

summary11.forEach((item, index) => {
    slide11.addText(`▸ ${item}`, { x: 0.8, y: 2.2 + index * 0.5, w: 8.7, h: 0.4, fontSize: 18, color: '555555' });
});

slide11.addShape(pptx.ShapeType.rect, { 
    x: 0.5, y: 5.0, w: 9, h: 1.5, 
    fill: { color: 'f5f7fa' }, line: { color: '667eea', width: 4 } 
});
slide11.addText('🚀 开始使用TRAE，开启AI编程新时代！', { x: 0.7, y: 5.2, w: 8.6, h: 0.5, fontSize: 28, bold: true, color: '333333', align: 'center' });
slide11.addText('国内版：https://www.trae.com.cn/', { x: 0.7, y: 5.8, w: 8.6, h: 0.3, fontSize: 18, color: '555555', align: 'center' });
slide11.addText('国际版：https://www.trae.ai/', { x: 0.7, y: 6.1, w: 8.6, h: 0.3, fontSize: 18, color: '555555', align: 'center' });

// 保存PPT文件
pptx.writeFile({ fileName: 'trae_training_presentation.pptx' })
    .then(fileName => {
        console.log(`PPT文件已生成: ${fileName}`);
    })
    .catch(err => {
        console.error('生成PPT文件时出错:', err);
    });