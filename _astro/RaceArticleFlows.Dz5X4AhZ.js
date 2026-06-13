import{M as c,j as o,i as u,B as g,C as b,P as s}from"./style.BAyEAhob.js";const p={width:170,minHeight:68,border:"2px solid #2563eb",borderRadius:8,background:"#eff6ff",color:"#172554",fontSize:14,fontWeight:650,lineHeight:1.35,padding:10,whiteSpace:"pre-line",boxShadow:"0 1px 3px rgba(15, 23, 42, 0.12)"},a={width:190,minHeight:76,border:"2px solid #0f766e",background:"#ecfdf5",color:"#134e4a"},d={width:150,minHeight:72,border:"2px solid #7c3aed",background:"#f5f3ff",color:"#3b0764"},y={stroke:"#2563eb",strokeWidth:2},x={animated:!1,type:"straight",style:y,markerEnd:{type:c.ArrowClosed,color:"#2563eb",width:18,height:18},labelStyle:{fontSize:13,fontWeight:650,fill:"#172554"},labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#ffffff",fillOpacity:.92}};function m(t,e){const l=e==="horizontal"?s.Right:s.Bottom,r=e==="horizontal"?s.Left:s.Top;return t.map(n=>({...n,sourcePosition:n.sourcePosition||l,targetPosition:n.targetPosition||r,style:{...p,...n.style||{}}}))}function i({nodes:t,edges:e,height:l,minZoom:r=.55,direction:n="vertical"}){return o.jsx("div",{style:{height:l,width:"100%",border:"1px solid #dbe3ef",borderRadius:8,margin:"20px 0",overflow:"hidden",background:"#fbfdff"},children:o.jsxs(u,{nodes:m(t,n),edges:e,defaultEdgeOptions:x,fitView:!0,fitViewOptions:{padding:.18,minZoom:r,maxZoom:1},minZoom:r,maxZoom:1.4,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[o.jsx(g,{color:"#d5deea",gap:18}),o.jsx(b,{showInteractive:!1})]})})}function f(){const t=[{id:"source",position:{x:250,y:20},data:{label:`1. Go 源码
普通业务代码`}},{id:"instrument",position:{x:250,y:130},data:{label:`2. 编译器插桩
插入 race 调用`}},{id:"binary",position:{x:250,y:240},data:{label:`3. 插桩后二进制
链接 ThreadSanitizer 运行时`}},{id:"runtime",position:{x:250,y:350},data:{label:`4. 运行时执行
收集内存访问事件`}},{id:"tsan",position:{x:250,y:470},data:{label:`5. ThreadSanitizer 分析
影子内存 + happens-before`},style:a},{id:"report",position:{x:100,y:610},data:{label:`6a. 有竞态
输出诊断报告`},style:{background:"#fef2f2",borderColor:"#dc2626"}},{id:"ok",position:{x:400,y:610},data:{label:`6b. 无竞态
正常退出`},style:{background:"#f0fdf4",borderColor:"#16a34a"}}],e=[{id:"e1",source:"source",target:"instrument"},{id:"e2",source:"instrument",target:"binary"},{id:"e3",source:"binary",target:"runtime"},{id:"e4",source:"runtime",target:"tsan"},{id:"e5",source:"tsan",target:"report"},{id:"e6",source:"tsan",target:"ok"}];return o.jsx(i,{nodes:t,edges:e,height:740,minZoom:.82})}function w(){const t=[{id:"source",position:{x:250,y:20},data:{label:`1. Go 源码
.go files`}},{id:"build",position:{x:250,y:130},data:{label:`2. go build -race
插桩 + 链接`}},{id:"binary",position:{x:250,y:240},data:{label:`3. 二进制
嵌入 ThreadSanitizer`}},{id:"run",position:{x:250,y:350},data:{label:`4. 运行程序
ThreadSanitizer 在线检查`}},{id:"result",position:{x:250,y:470},data:{label:`5. 检测结果
是否有冲突`},style:d},{id:"race",position:{x:100,y:610},data:{label:`6a. 发现竞态
报告 + exit(66)`},style:{background:"#fef2f2",borderColor:"#dc2626"}},{id:"ok",position:{x:400,y:610},data:{label:`6b. 未发现
exit(0)`},style:{background:"#f0fdf4",borderColor:"#16a34a"}}],e=[{id:"e1",source:"source",target:"build"},{id:"e2",source:"build",target:"binary"},{id:"e3",source:"binary",target:"run"},{id:"e4",source:"run",target:"result"},{id:"e5",source:"result",target:"race"},{id:"e6",source:"result",target:"ok"}];return o.jsx(i,{nodes:t,edges:e,height:740,minZoom:.82})}function S(){const t=[{id:"app",position:{x:260,y:30},data:{label:`业务逻辑层
用户代码 + 插桩调用`}},{id:"runtime",position:{x:260,y:150},data:{label:`Runtime 层
Go 同步事件`}},{id:"asm",position:{x:260,y:270},data:{label:`汇编桥接层
race_amd64.s`}},{id:"tsan",position:{x:260,y:390},data:{label:`ThreadSanitizer C 运行时
检测 + 报告`},style:a}],e=[{id:"e1",source:"app",target:"runtime"},{id:"e2",source:"runtime",target:"asm"},{id:"e3",source:"asm",target:"tsan"}];return o.jsx(i,{nodes:t,edges:e,height:520,minZoom:.85})}function k(){const t=[{id:"compile",position:{x:30,y:40},data:{label:`1. 编译器
静态单赋值（SSA）插桩`},style:a},{id:"mem",position:{x:30,y:180},data:{label:`输出
raceread / racewrite`}},{id:"runtime",position:{x:250,y:40},data:{label:`2. Go Runtime
同步语义建模`},style:a},{id:"sync",position:{x:250,y:180},data:{label:`输出
acquire / release`}},{id:"asm",position:{x:470,y:40},data:{label:`3. 汇编桥接
栈切换 + 地址过滤`},style:a},{id:"call",position:{x:470,y:180},data:{label:`输出
racecalladdr / racecall`}},{id:"tsan",position:{x:250,y:350},data:{label:`4. ThreadSanitizer C 运行时
影子内存
向量时钟`},style:a},{id:"detect",position:{x:100,y:500},data:{label:`5a. 竞态检测
happens-before 比较`}},{id:"report",position:{x:400,y:500},data:{label:`5b. 报告生成
程序计数器（PC）符号化`},style:{background:"#f0f9ff",borderColor:"#0284c7"}}],e=[{id:"e1",source:"compile",target:"mem"},{id:"e2",source:"runtime",target:"sync"},{id:"e3",source:"asm",target:"call"},{id:"e4",source:"mem",target:"tsan"},{id:"e5",source:"sync",target:"tsan"},{id:"e6",source:"call",target:"tsan"},{id:"e7",source:"tsan",target:"detect"},{id:"e8",source:"tsan",target:"report"}];return o.jsx(i,{nodes:t,edges:e,height:660,minZoom:.82})}function j(){const t=[{id:"app",position:{x:250,y:20},data:{label:`1. 应用内存
8 bytes`}},{id:"shadow",position:{x:220,y:140},data:{label:`2. 影子内存（Shadow Memory）
4 个 shadow word
共 16 bytes`},style:{...a,width:230}},{id:"slots",position:{x:70,y:300},data:{label:`3a. 访问历史槽位
槽位 0 · 槽位 1 · 槽位 2 · 槽位 3
每个槽位 4 bytes`},style:{width:260}},{id:"ratio",position:{x:430,y:300},data:{label:`3b. 空间比例
16 / 8 = 2×`}}],e=[{id:"e1",source:"app",target:"shadow"},{id:"e2",source:"shadow",target:"slots"},{id:"e3",source:"shadow",target:"ratio"}];return o.jsx(i,{nodes:t,edges:e,height:460,minZoom:.82})}function R(){const t=[{id:"word",position:{x:250,y:30},data:{label:`Shadow Word
32 bits`},style:a},{id:"flags",position:{x:20,y:160},data:{label:`Flags
A: atomic
R: read`},style:{width:150}},{id:"epoch",position:{x:190,y:160},data:{label:`Epoch
bits 29..16
14-bit 时间戳`},style:{width:150}},{id:"sid",position:{x:360,y:160},data:{label:`线程槽位标识（SID）
bits 15..8
线程槽位 ID`},style:{width:150}},{id:"access",position:{x:530,y:160},data:{label:`Access
bits 7..0
字节访问掩码`},style:{width:150}},{id:"judge",position:{x:250,y:300},data:{label:`冲突判断
字节重叠 + happens-before 比较`},style:{...d,width:190}}],e=[{id:"e1",source:"word",target:"flags"},{id:"e2",source:"word",target:"epoch"},{id:"e3",source:"word",target:"sid"},{id:"e4",source:"word",target:"access"},{id:"e5",source:"flags",target:"judge"},{id:"e6",source:"epoch",target:"judge"},{id:"e7",source:"sid",target:"judge"},{id:"e8",source:"access",target:"judge"}];return o.jsx(i,{nodes:t,edges:e,height:430,minZoom:.78})}function C(){const t=[{id:"g1",position:{x:80,y:50},data:{label:`goroutine A
→ 槽位 0`}},{id:"g2",position:{x:80,y:180},data:{label:`goroutine B
→ 槽位 1`}},{id:"g3",position:{x:80,y:310},data:{label:`goroutine C
→ 槽位 254`}},{id:"s1",position:{x:420,y:50},data:{label:`槽位 0
线程槽位标识（SID）=0
epoch=42`},style:a},{id:"s2",position:{x:420,y:180},data:{label:`槽位 1
线程槽位标识（SID）=1
epoch=17`},style:a},{id:"s3",position:{x:420,y:310},data:{label:`槽位 254
线程槽位标识（SID）=254
epoch=3`},style:a}],e=[{id:"e1",source:"g1",target:"s1"},{id:"e2",source:"g2",target:"s2"},{id:"e3",source:"g3",target:"s3"}];return o.jsx(i,{nodes:t,edges:e,height:430,minZoom:.88,direction:"horizontal"})}function _(){const t=[{id:"chanSend",position:{x:80,y:40},data:{label:`channel 发送
racerelease`}},{id:"chanRecv",position:{x:80,y:170},data:{label:`channel 接收
raceacquire`},style:a},{id:"mutexUnlock",position:{x:390,y:40},data:{label:`互斥锁解锁
racerelease`}},{id:"mutexLock",position:{x:390,y:170},data:{label:`互斥锁加锁
raceacquire`},style:a},{id:"wgDone",position:{x:80,y:330},data:{label:`WaitGroup.Done
release-merge`}},{id:"wgWait",position:{x:80,y:460},data:{label:`WaitGroup.Wait 返回
raceacquire`},style:a},{id:"goStart",position:{x:390,y:330},data:{label:`go func()
racegostart`}},{id:"goRun",position:{x:390,y:460},data:{label:`新 goroutine
开始执行`},style:a}],e=[{id:"e1",source:"chanSend",target:"chanRecv"},{id:"e2",source:"mutexUnlock",target:"mutexLock"},{id:"e3",source:"wgDone",target:"wgWait"},{id:"e4",source:"goStart",target:"goRun"}];return o.jsx(i,{nodes:t,edges:e,height:620,minZoom:.9})}function F(){const t=[{id:"code",position:{x:250,y:20},data:{label:`1. 用户写入
counter++`}},{id:"compiler",position:{x:250,y:135},data:{label:`2. 编译器插桩
插入 racewrite(addr)
addr 表示访问地址`}},{id:"asm",position:{x:250,y:250},data:{label:`3. 汇编桥接
过滤地址 + 切换 g0 系统栈`},style:a},{id:"tsan",position:{x:250,y:370},data:{label:`4. ThreadSanitizer 写事件
__tsan_write`},style:a},{id:"shadow",position:{x:250,y:490},data:{label:`5. 查询影子内存
加载最近访问记录`}},{id:"race",position:{x:90,y:630},data:{label:`6a. 无 happens-before 关系
报告数据竞争`},style:{background:"#fef2f2",borderColor:"#dc2626"}},{id:"ok",position:{x:410,y:630},data:{label:`6b. 有 happens-before 关系
更新 shadow word`},style:{background:"#f0fdf4",borderColor:"#16a34a"}}],e=[{id:"e1",source:"code",target:"compiler"},{id:"e2",source:"compiler",target:"asm"},{id:"e3",source:"asm",target:"tsan"},{id:"e4",source:"tsan",target:"shadow"},{id:"e5",source:"shadow",target:"race"},{id:"e6",source:"shadow",target:"ok"}];return o.jsx(i,{nodes:t,edges:e,height:760,minZoom:.82})}function z(){const t=[{id:"newproc",position:{x:250,y:20},data:{label:`1. newproc()
创建 goroutine`}},{id:"start",position:{x:250,y:135},data:{label:`2. racegostart
继承父上下文`}},{id:"tsan",position:{x:250,y:250},data:{label:`3. __tsan_go_start
分配 child.racectx
子线程上下文`},style:a},{id:"run",position:{x:250,y:370},data:{label:`4. goroutine 运行
持续上报事件`},style:a},{id:"mem",position:{x:30,y:510},data:{label:`4a. 内存访问
raceread / racewrite`}},{id:"sync",position:{x:250,y:510},data:{label:`4b. 同步事件
acquire / release`}},{id:"exit",position:{x:470,y:510},data:{label:`5. goexit1
调用 racegoend`}},{id:"end",position:{x:470,y:650},data:{label:`6. __tsan_go_end
结束 racectx
线程上下文`},style:{background:"#f8fafc"}}],e=[{id:"e1",source:"newproc",target:"start"},{id:"e2",source:"start",target:"tsan"},{id:"e3",source:"tsan",target:"run"},{id:"e4",source:"run",target:"mem"},{id:"e5",source:"run",target:"sync"},{id:"e6",source:"run",target:"exit"},{id:"e7",source:"exit",target:"end"}];return o.jsx(i,{nodes:t,edges:e,height:760,minZoom:.82})}function P(){const t=[{id:"entry",position:{x:250,y:20},data:{label:`1. go build -race
入口开关`},style:d},{id:"cmd",position:{x:250,y:135},data:{label:`2. cmd/go
验证平台 + 链接 race 包`}},{id:"compile",position:{x:250,y:250},data:{label:`3. cmd/compile
静态单赋值（SSA）阶段插桩`}},{id:"ssa",position:{x:30,y:390},data:{label:`3a. ssagen/ssa.go
插入读写检测调用`}},{id:"runtime",position:{x:250,y:390},data:{label:`4. Go runtime
建模同步语义`},style:a},{id:"chan",position:{x:30,y:540},data:{label:`4a. chan.go
channel 同步`}},{id:"proc",position:{x:250,y:540},data:{label:`4b. proc.go
goroutine 生命周期`}},{id:"racego",position:{x:470,y:540},data:{label:`4c. race.go
raceinit / 符号化`}},{id:"asm",position:{x:250,y:690},data:{label:`5. race_amd64.s
桥接到 C 运行时`}},{id:"syso",position:{x:250,y:830},data:{label:`6. runtime/race/*.syso
ThreadSanitizer C 运行时`},style:a}],e=[{id:"e1",source:"entry",target:"cmd"},{id:"e2",source:"cmd",target:"compile"},{id:"e3",source:"compile",target:"ssa"},{id:"e4",source:"compile",target:"runtime"},{id:"e5",source:"runtime",target:"asm"},{id:"e6",source:"runtime",target:"chan"},{id:"e7",source:"runtime",target:"proc"},{id:"e8",source:"runtime",target:"racego"},{id:"e9",source:"asm",target:"syso"}];return o.jsx(i,{nodes:t,edges:e,height:960,minZoom:.78})}function Z(){const t=[{id:"code",position:{x:250,y:20},data:{label:`1. 用户代码
x = 42`}},{id:"compiler",position:{x:250,y:135},data:{label:`2. 编译器插桩
runtime.racewrite(addr)
addr 表示访问地址`}},{id:"stub",position:{x:250,y:250},data:{label:`3. 汇编存根（stub）
读取 addr / 程序计数器（PC）`}},{id:"filter",position:{x:250,y:370},data:{label:`4. racecalladdr
过滤地址范围`},style:d},{id:"skip",position:{x:60,y:510},data:{label:`5a. 栈或非监控地址
直接返回`},style:{background:"#f8fafc"}},{id:"call",position:{x:320,y:510},data:{label:`5b. 堆或全局地址
切换 g0 系统栈`},style:a},{id:"tsan",position:{x:320,y:650},data:{label:`6. __tsan_write
查询影子内存`},style:a},{id:"report",position:{x:320,y:790},data:{label:`7. 返回
或报告竞态`},style:{background:"#f0f9ff",borderColor:"#0284c7"}}],e=[{id:"e1",source:"code",target:"compiler"},{id:"e2",source:"compiler",target:"stub"},{id:"e3",source:"stub",target:"filter"},{id:"e4",source:"filter",target:"skip"},{id:"e5",source:"filter",target:"call"},{id:"e6",source:"call",target:"tsan"},{id:"e7",source:"tsan",target:"report"}];return o.jsx(i,{nodes:t,edges:e,height:920,minZoom:.82})}export{z as GoroutineLifecycleFlow,k as RaceArchitectureFlow,w as RaceBuildPipelineFlow,_ as RaceHBFlow,f as RaceIntroFlow,S as RaceLayerFlow,F as RaceSequenceFlowReadable,C as RaceThreadSlotFlowReadable,Z as RaceWritePathFlow,j as ShadowMemoryFlow,R as ShadowWordFlow,P as SourceMapFlow};
