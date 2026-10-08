# 内容与收录排查 — 2026-10-08

结论：内容存在实质准确性和信息增量风险；不能证明它们就是 GSC 40 页未抓取的原因。审查覆盖全站技术响应、生成 HTML 与内容模板，深入核对 Taxi 来源及 progression 来源；其余活动/战斗页尚未逐条实机验证。

## 技术结果

43 个 sitemap 网址线上全部 HTTP 200、无跳转、自指 canonical、index,follow。普通网络请求不等于 Googlebot 实际抓取测试，未检查 GSC URL Inspection、服务器机器人日志或 Google 选择的 canonical。原 CSV 无受影响网址，无法确认三个重定向网址身份。构建和链接检查通过。

## 已修正的明确问题（本地，未发布）

- Reward 和 Ending 原先没有站内链接入口，已从主任务页补链接。

- West Incursion 停车场描述与两份来源均不符，改为 Empire Avenue 附近重力墙。
- 启动页错误地说电话把玩家带入 Threshold，改为先进入出租车，再接电话。
- Shadow 解法只有“不同的影子”，缺少判断标准。补为出租车形状，并明确最后一轮屋顶标志条件只由其中一份来源描述。
- Blackout 解法把最后一轮缩成 roof sign 闪烁，改为车辆灯与街灯状态关系。
- Central、Underpass、Unknown 路线有来源分歧，去除笼统验证承诺并提示核对游戏标记。已对照来源不等于亲自验证。
- 将共享日期标签 Last verified 改为 Sources reviewed，并说明来源冲突不能证明游戏随机分配谜题。

## 按优先级处理

### P1：可靠性与证据

Taxi 七个区域页只有文字路线，没有区域地图、目标近景或操作截图。两份攻略在 Central 和 Unknown 方位上矛盾，原稿却写成确定事实。需要实机证据解决，不应选择较顺眼的版本冒充验证。

来源声明是共享模板，没有逐条事实与来源对应，部分“修复”步骤（清敌、重载 checkpoint）只是推测建议，不是已确认修复。补平台、版本、复现条件；将建议与确认机制分开。真实编辑身份仍未提供，不应编造。

### P2：搜索意图与信息增量

合并候选（仅建议，未做重定向或 noindex）：

|页面|问题|建议|
|---|---|---|
|/taxi-ending/|标题承诺 ending explained，正文主要讲如何结束任务，没有解释叙事|改标题为完成条件，或并入 /last-taxi/|
|/guides/how-to-start-last-taxi/ + /guides/mila-payphone/|与主 walkthrough 重复介绍启动、电话和绿灯|优先整合到主任务页；独立页须补独有问题证据|
|/guides/missing-taxi-fix/ + /guides/progress-not-saving/|故障建议缺少复现记录，部分内容是通用重载建议|整合排错表并区分观察到的故障与尝试性建议|
|/guides/control-resonant-walkthrough/ + /guides/best-quest-order/ + /guides/where-to-go-next/|多个页面重复区域次序与能力前置|让 walkthrough 提供具体任务步骤、quest order 提供依赖表、where-to-go-next 提供状态诊断|
|/guides/unlock-shift/ + /guides/unlock-reach/|有解锁任务名，但没有 Fault 具体步骤、控制键或地图|补完整可执行步骤；不要靠通用提示加长|
|/guides/all-quests/|包含主任务链，但 Side Stories 只是分类介绍|补完整有来源的清单，或把标题范围收窄|

这些是人工意图审查结果，不是“重复内容处罚”诊断。没有因为短或未收录就删除页面。

### 保留并补证据

Painting、Laundry 具有明确选择/房间表；Freeze Frame 与 Dog 具有独立区域清单；Power Lines 有站点步骤；Taxi matcher 与 tracker 有操作价值。此为结构与信息用途评价，不代表所有细节已逐条验证或保证收录。

## 后续顺序

先发布已确认纠错，再优先补 Taxi 地图/实机证据、完成合并候选的实际内容整合与链接迁移；请求重要页索引前在 GSC 测试实际网址。不要批量改日期、堆字数、继续扩页或为所有未收录网址添加 noindex。观察新的覆盖数据是否增加抓取，若仍未抓取再结合日志诊断。

## 来源

- [GamesRadar Taxi walkthrough](https://www.gamesradar.com/games/action-rpg/control-resonant-taxis/)
- [PowerPyx Taxi walkthrough](https://www.powerpyx.com/control-resonant-all-taxi-locations-the-last-taxi-walkthrough/)
- [PowerPyx quest structure](https://www.powerpyx.com/control-resonant-walkthrough-all-quests/)
- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## 全站 URL 清单

字数为去掉侧栏与来源模板后的 main 区域近似文本量，仍包含 FAQ/相关链接。只用于识别审查对象，不是 Google 质量标准。链接深度包含全站导航与页脚，不能代表正文推荐强度。

|路径|约字数|首页最短链接步数|技术状态|
|---|---:|---:|---|
|/|913|0|200 / 自指 canonical / index|
|/taxi-locations/|436|1|200 / 自指 canonical / index|
|/taxi-puzzle-solver/|322|1|200 / 自指 canonical / index|
|/puzzles/|372|1|200 / 自指 canonical / index|
|/puzzles/freeze-frame/|921|1|200 / 自指 canonical / index|
|/puzzles/painting-puzzle/|436|1|200 / 自指 canonical / index|
|/puzzles/laundry-puzzle/|564|1|200 / 自指 canonical / index|
|/guides/power-lines/|457|1|200 / 自指 canonical / index|
|/guides/mysterious-dog-locations/|672|1|200 / 自指 canonical / index|
|/last-taxi/|425|1|200 / 自指 canonical / index|
|/guides/|725|1|200 / 自指 canonical / index|
|/locations/downtown/|378|1|200 / 自指 canonical / index|
|/locations/central/|359|1|200 / 自指 canonical / index|
|/locations/evacuation-zone/|356|1|200 / 自指 canonical / index|
|/locations/west-incursion-zone/|379|1|200 / 自指 canonical / index|
|/locations/the-park/|350|1|200 / 自指 canonical / index|
|/locations/underpass/|364|1|200 / 自指 canonical / index|
|/locations/unknown/|373|1|200 / 自指 canonical / index|
|/puzzles/roof-signs/|289|2|200 / 自指 canonical / index|
|/puzzles/taxi-lights/|273|2|200 / 自指 canonical / index|
|/puzzles/streetlight-rhythm/|278|2|200 / 自指 canonical / index|
|/puzzles/blackout/|286|2|200 / 自指 canonical / index|
|/puzzles/mold-repair/|295|2|200 / 自指 canonical / index|
|/puzzles/shadows/|297|2|200 / 自指 canonical / index|
|/guides/how-to-start-last-taxi/|282|2|200 / 自指 canonical / index|
|/guides/mila-payphone/|205|2|200 / 自指 canonical / index|
|/guides/missing-taxi-fix/|216|2|200 / 自指 canonical / index|
|/guides/progress-not-saving/|219|2|200 / 自指 canonical / index|
|/guides/control-resonant-walkthrough/|566|1|200 / 自指 canonical / index|
|/guides/all-quests/|553|1|200 / 自指 canonical / index|
|/guides/best-quest-order/|513|2|200 / 自指 canonical / index|
|/guides/where-to-go-next/|529|2|200 / 自指 canonical / index|
|/guides/abilities/|500|1|200 / 自指 canonical / index|
|/guides/unlock-shift/|463|2|200 / 自指 canonical / index|
|/guides/unlock-reach/|477|2|200 / 自指 canonical / index|
|/guides/ability-barriers/|476|2|200 / 自指 canonical / index|
|/guides/how-to-respec/|475|2|200 / 自指 canonical / index|
|/guides/bosses/|461|1|200 / 自指 canonical / index|
|/guides/best-first-ability/|518|2|200 / 自指 canonical / index|
|/guides/early-game-tips/|491|2|200 / 自指 canonical / index|
|/taxi-rewards/|333|2（补链接后）|200 / 自指 canonical / index|
|/taxi-ending/|359|2（补链接后）|200 / 自指 canonical / index|
|/about/|315|1|200 / 自指 canonical / index|

## 后续执行：Taxi 整合

已将启动、电话、ending 合入主攻略，将进度问题合入排错页。四个旧地址配置永久跳转并移出 sitemap，内链直接指向目标段落。页面总数变为 39；上方 43 页清单保留为审计时点快照。Main Quest List 标题已收窄。原始实机素材、Shift/Reach 具体过程和进度页分工仍待后续证据支持，未编造内容补齐。
