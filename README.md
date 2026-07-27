# y2k Blue Visual

把 Obsidian 中分散的笔记、项目、任务和日期聚合成一个可视化工作台。

## 当前已实现

- 可展开、可右键维护并持久化的多层导航
- 工作台、项目档案、多维表、每日笔记、知识中心、知识库、灵感收集和笔记榨汁机页面
- 笔记数、进行中项目、未完成任务、完成率总览
- 项目进度、Markdown 任务看板和近期排期
- 项目阶段自定义、阶段进度编辑和总进度自动回写
- 可新增笔记、添加字段并直接编辑属性的多维表
- 最近 28 天任务燃尽热力图（绿色 → 蓝色 → 红色）
- 每日笔记自动创建、页面内编辑和自动保存
- 共用可视化 Markdown 编辑器：字体、颜色、间距、标题分色、列表、对齐和图片
- 选中文本添加批注；存在批注时自动展开约 8:2 的批注侧栏
- 可隐藏 AI 右侧栏，以及 OpenAI、Claude、本机 Codex 桥接和安全网关设置
- 本机 Codex 桥接支持令牌验证、只读隔离、会话保存与自动续接
- API 密钥使用 Obsidian SecretStorage，不写入 Markdown 或普通插件数据
- 笔记榨汁机：Raw 原料生成结构化 Review，人工确认平台/内容分类后进入知识库
- Review 支持正文级差异审阅：对照原料相近片段、标记增删，并逐段采用或暂不采用
- 灵感收集可直接粘贴文字或截图，自动保存附件并生成 Y2K 方格纸瀑布流卡片
- 从真实 Vault 目录读取知识、灵感和榨汁队列
- 全库布尔精确查询与 BM25 风格关键词加权搜索
- Pixel Sky 浅色/深色主题、方格纸和便利贴纹理
- 设置中可自定义主要文字、辅助文字以及待处理/进行中/完成/逾期状态色
- 顶部常用操作使用放大像素图标与可见文字标签
- 自动适配 Obsidian 明暗主题与窄屏

## 数据约定

项目笔记使用如下属性：

```yaml
---
type: project
status: doing
progress: 65
due: 2026-08-15
area: 工作
stages:
  - id: research
    name: 调研
    progress: 100
  - id: execution
    name: 执行
    progress: 30
tags: [project]
---
```

当 `stages` 存在时，插件会用所有阶段进度的平均值计算项目总进度，并在保存阶段时同步更新 `progress` 与 `status`。

任务支持普通 Markdown 任务；在末尾加入日期即可进入排期：

```markdown
- [ ] 完成首页原型 📅 2026-07-25
- [x] 整理需求 due: 2026-07-20
```

## 安装

插件通过 Obsidian 社区审核后，可在任意电脑上直接安装：

1. 打开 Obsidian → **设置** → **社区插件**。
2. 关闭受限模式，选择 **浏览**。
3. 搜索 **y2k Blue Visual**，选择 **安装**，然后选择 **启用**。
4. 点击左侧工作台图标，或从命令面板运行“打开可视化工作台”。

在社区版本正式发布前，开发者可从 GitHub Release 下载 `main.js`、`manifest.json`
和 `styles.css`，放入 Vault 的 `.obsidian/plugins/y2k-blue-visual/` 目录进行测试。

## 开发

1. 在本目录运行 `npm install`。
2. 运行 `npm run build`，生成 `main.js`。
3. 把 `manifest.json`、`main.js`、`styles.css` 复制到 Vault 的 `.obsidian/plugins/y2k-blue-visual/`。
4. 在 Obsidian 的“第三方插件”中启用 **y2k Blue Visual**。
5. 点击左侧的工作台图标，或从命令面板运行“打开可视化工作台”。

AI 功能需要 Obsidian 1.11.4 或更高版本。打开插件设置中的“AI 与右侧栏”，选择提供商、模型并安全保存密钥后，可使用“测试连接”验证。

使用本机 Codex 时，先双击 `bridge/start-codex-bridge.cmd`，再把窗口显示的桥接令牌粘贴到插件设置。详细说明见 `bridge/README.md`。

## 网络与隐私披露

- 插件不包含遥测、广告或后台数据收集。
- AI 功能默认关闭；只有用户主动启用并发起请求时才访问网络。
- OpenAI、Anthropic 或自定义网关模式会把聊天输入，以及用户明确允许的当前笔记上下文，发送到设置中的接口地址。
- 笔记榨汁机只在用户点击处理时，把所选 Raw 原料发送到当前 AI 提供商。
- API 密钥和桥接令牌保存在 Obsidian SecretStorage，不写入 Markdown、普通插件 `data.json` 或公开发布包。
- 本机 Codex 桥接默认只监听 `127.0.0.1`，并要求设备本地生成的桥接令牌。

## 主题开发

主题已经与功能样式隔离：

```text
src/styles/base.css        固定字号、间距和安全回退
src/styles/components.css  工作台组件与响应式布局
src/themes/obsidian.css    跟随 Obsidian 的原生主题
src/themes/pixel-sky.css   Pixel Sky 视觉主题
src/theme-manager.ts       主题与图标包切换
styles.css                 构建时自动生成，请勿直接编辑
```

- 修改视觉主题时只编辑 `src/themes/`，不会改动数据读取和功能代码。
- 修改组件排版时编辑 `src/styles/components.css`。
- 运行 `npm run build:styles` 可单独重新生成 `styles.css`。
- 每个主题只作用于 `.vw-root`，不会污染 Obsidian 本体或其他插件。

## 下一步建议

- 多维表筛选、排序、分组与保存视图
- AI 语义检索、标签关系与关联图谱
- 关键词索引持久化与单文件增量更新
- 项目阶段模板与日历 / 甘特图视图
