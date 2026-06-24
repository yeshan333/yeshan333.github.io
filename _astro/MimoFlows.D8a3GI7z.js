import{a as e,i as t,n,o as r,r as i,t as a}from"./style.Dwj8YfMZ.js";var o=r(),s={width:170,minHeight:68,border:`2px solid #2563eb`,borderRadius:8,background:`#eff6ff`,color:`#172554`,fontSize:14,fontWeight:650,lineHeight:1.35,padding:10,whiteSpace:`pre-line`,boxShadow:`0 1px 3px rgba(15, 23, 42, 0.12)`},c={width:190,minHeight:76,border:`2px solid #0f766e`,background:`#ecfdf5`,color:`#134e4a`},l={width:150,minHeight:72,border:`2px solid #7c3aed`,background:`#f5f3ff`,color:`#3b0764`},u={animated:!1,type:`straight`,style:{stroke:`#2563eb`,strokeWidth:2},markerEnd:{type:t.ArrowClosed,color:`#2563eb`,width:18,height:18},labelStyle:{fontSize:13,fontWeight:650,fill:`#172554`},labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:`#ffffff`,fillOpacity:.92}};function d(t,n){let r=n===`horizontal`?e.Right:e.Bottom,i=n===`horizontal`?e.Left:e.Top;return t.map(e=>({...e,sourcePosition:e.sourcePosition||r,targetPosition:e.targetPosition||i,style:{...s,...e.style||{}}}))}function f({nodes:e,edges:t,height:r,minZoom:s=.55,direction:c=`vertical`}){return(0,o.jsx)(`div`,{style:{height:r,width:`100%`,border:`1px solid #dbe3ef`,borderRadius:8,margin:`20px 0`,overflow:`hidden`,background:`#fbfdff`},children:(0,o.jsxs)(i,{nodes:d(e,c),edges:t,defaultEdgeOptions:u,fitView:!0,fitViewOptions:{padding:.18,minZoom:s,maxZoom:1},minZoom:s,maxZoom:1.4,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[(0,o.jsx)(a,{color:`#d5deea`,gap:18}),(0,o.jsx)(n,{showInteractive:!1})]})})}function p(){return(0,o.jsx)(f,{nodes:[{id:`user`,position:{x:250,y:20},data:{label:`1. 会话交互
产生轨迹数据`}},{id:`writer`,position:{x:250,y:130},data:{label:`2. Checkpoint Writer
自动记录状态与快照`},style:c},{id:`db_tree`,position:{x:250,y:240},data:{label:`3. 数据源
mimocode.db + memory/`}},{id:`dream`,position:{x:100,y:360},data:{label:`4a. Dream (7天自动)
合并整理碎粒记忆到
projects/<id>/MEMORY.md`},style:c},{id:`distill`,position:{x:400,y:360},data:{label:`4b. Distill (30天自动)
识别重复操作并提炼技能
.mimocode/skills/`},style:c},{id:`evolution`,position:{x:250,y:490},data:{label:`5. 跨会话进化
实现持续经验积累`},style:{background:`#f0fdf4`,borderColor:`#16a34a`}}],edges:[{id:`e1`,source:`user`,target:`writer`},{id:`e2`,source:`writer`,target:`db_tree`},{id:`e3`,source:`db_tree`,target:`dream`},{id:`e4`,source:`db_tree`,target:`distill`},{id:`e5`,source:`dream`,target:`evolution`},{id:`e6`,source:`distill`,target:`evolution`}],height:580,minZoom:.82})}function m(){return(0,o.jsx)(f,{nodes:[{id:`storage`,position:{x:250,y:20},data:{label:`存储与物理层
mimocode.db (轨迹库)
memory/ (记忆树)`}},{id:`trigger`,position:{x:50,y:140},data:{label:`调度触发层
shouldAutoDream/Distill
检查上次执行时间`}},{id:`fts`,position:{x:250,y:140},data:{label:`全文检索层
Memory.reconcile()
SQLite FTS5 + BM25`}},{id:`guard`,position:{x:450,y:140},data:{label:`安全沙箱层
assertWriteAllowed()
Memory Path Guard`}},{id:`agents`,position:{x:250,y:260},data:{label:`后台智能体层
dream.txt & distill.txt
非交互式进程运行`},style:c},{id:`output`,position:{x:250,y:370},data:{label:`沉淀物
MEMORY.md / Skills / Agents`},style:{background:`#f0f9ff`,borderColor:`#0284c7`}}],edges:[{id:`e1`,source:`storage`,target:`fts`},{id:`e2`,source:`trigger`,target:`agents`},{id:`e3`,source:`fts`,target:`agents`},{id:`e4`,source:`guard`,target:`agents`},{id:`e5`,source:`agents`,target:`output`}],height:460,minZoom:.8})}function h(){return(0,o.jsx)(f,{nodes:[{id:`p0`,position:{x:250,y:20},data:{label:`Phase 0. 定位数据
获取 SQLite 库与 memory/`}},{id:`p1`,position:{x:250,y:130},data:{label:`Phase 1. 环境对齐
读取 MEMORY.md 与 checkpoints`}},{id:`p2`,position:{x:250,y:240},data:{label:`Phase 2. 收集候选知识
从最近 checkpoint.md 中提取`}},{id:`p3`,position:{x:250,y:350},data:{label:`Phase 3. 底层验证
SQLite 轨迹检索消息与工具链`}},{id:`p4`,position:{x:250,y:460},data:{label:`Phase 4. 合并去重
按 Rules/Decisions 增量合并`}},{id:`p5`,position:{x:250,y:570},data:{label:`Phase 5. 垃圾回收与验证
校验路径、删除过期记忆、清空 notes`},style:c}],edges:[{id:`e1`,source:`p0`,target:`p1`},{id:`e2`,source:`p1`,target:`p2`},{id:`e3`,source:`p2`,target:`p3`},{id:`e4`,source:`p3`,target:`p4`},{id:`e5`,source:`p4`,target:`p5`}],height:670,minZoom:.85})}function g(){return(0,o.jsx)(f,{nodes:[{id:`p0`,position:{x:250,y:20},data:{label:`Phase 0. 检查轨迹
扫描最近 30 天会话`}},{id:`p1`,position:{x:250,y:130},data:{label:`Phase 1. 资产清单
查询已存在的 Skills/Agents/Cmds`}},{id:`p2`,position:{x:250,y:240},data:{label:`Phase 2. 模式识别
读取 memory 并识别重复流程`}},{id:`p3`,position:{x:250,y:350},data:{label:`Phase 3. 数据集校验
通过 SQLite 聚合工具调用频次`}},{id:`p4`,position:{x:250,y:460},data:{label:`Phase 4. 短名单评定
判定复用价值与合适形式`}},{id:`p5`,position:{x:250,y:570},data:{label:`Phase 5. 最小化封装
挑选 Skill / Subagent / Command`},style:l},{id:`p6`,position:{x:250,y:680},data:{label:`Phase 6. 自动生成与校验
写入 .mimocode/ 并用 grep/glob 验证`},style:c}],edges:[{id:`e1`,source:`p0`,target:`p1`},{id:`e2`,source:`p1`,target:`p2`},{id:`e3`,source:`p2`,target:`p3`},{id:`e4`,source:`p3`,target:`p4`},{id:`e5`,source:`p4`,target:`p5`},{id:`e6`,source:`p5`,target:`p6`}],height:780,minZoom:.85})}function _(){return(0,o.jsx)(f,{nodes:[{id:`write_call`,position:{x:250,y:20},data:{label:`文件写入工具调用
(edit / write / apply_patch)`}},{id:`assert_write`,position:{x:250,y:130},data:{label:`assertWriteAllowed()
触发安全校验机制`}},{id:`is_memory`,position:{x:250,y:240},data:{label:`是否操作 memory/ 目录？`},style:l},{id:`bypass_replier`,position:{x:450,y:240},data:{label:`绕过交互询问
(避免后台任务死锁)`},style:{background:`#f0f9ff`,borderColor:`#0284c7`}},{id:`path_guard`,position:{x:250,y:350},data:{label:`assertMemoryWriteAllowed()
匹配 Agent 类型与路径白名单`}},{id:`agent_check`,position:{x:250,y:460},data:{label:`Agent 是 checkpoint-writer 吗？`},style:l},{id:`writer_allow`,position:{x:100,y:580},data:{label:`只准写入:
- MEMORY.md
- checkpoint.md
- tasks/<tid>/*.md`},style:{background:`#f0fdf4`,borderColor:`#16a34a`}},{id:`other_allow`,position:{x:400,y:580},data:{label:`只准写入:
- notes.md / MEMORY.md
- 禁止碰 tasks/<tid>/*.md`},style:{background:`#f0fdf4`,borderColor:`#16a34a`}}],edges:[{id:`e1`,source:`write_call`,target:`assert_write`},{id:`e2`,source:`assert_write`,target:`is_memory`},{id:`e3`,source:`is_memory`,target:`bypass_replier`,label:`是`},{id:`e4`,source:`is_memory`,target:`path_guard`,label:`是`},{id:`e5`,source:`path_guard`,target:`agent_check`},{id:`e6`,source:`agent_check`,target:`writer_allow`,label:`是`},{id:`e7`,source:`agent_check`,target:`other_allow`,label:`否`}],height:680,minZoom:.8})}function v(){return(0,o.jsx)(f,{nodes:[{id:`trigger`,position:{x:250,y:20},data:{label:`1. 触发与会话调度
auto-dream.ts
prompt.ts`}},{id:`prompts`,position:{x:250,y:130},data:{label:`2. 行为策略设定
dream.txt
distill.txt`}},{id:`fts_service`,position:{x:250,y:240},data:{label:`3. 检索基础服务
memory/service.ts
reconcile.ts`}},{id:`path_guard`,position:{x:250,y:350},data:{label:`4. 写入安全防护
tool/memory-path-guard.ts
tool/external-directory.ts`}}],edges:[{id:`e1`,source:`trigger`,target:`prompts`},{id:`e2`,source:`prompts`,target:`fts_service`},{id:`e3`,source:`fts_service`,target:`path_guard`}],height:440,minZoom:.85})}export{m as MimoArchitectureFlow,g as MimoDistillFlow,h as MimoDreamFlow,p as MimoIntroFlow,v as MimoSourceMapFlow,_ as MimoWriteGuardFlow};