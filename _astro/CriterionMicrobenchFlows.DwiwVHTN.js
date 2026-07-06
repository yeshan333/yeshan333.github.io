import{t as e}from"./jsx-runtime.DPvsry6Z.js";import{a as t,i as n,n as r,r as i,t as a}from"./style.CAM1shzb.js";var o=e(),s={width:178,minHeight:70,border:`2px solid #2563eb`,borderRadius:8,background:`#eff6ff`,color:`#172554`,fontSize:14,fontWeight:650,lineHeight:1.35,padding:10,whiteSpace:`pre-line`,boxShadow:`0 1px 3px rgba(15, 23, 42, 0.12)`},c={width:198,minHeight:78,border:`2px solid #0f766e`,background:`#ecfdf5`,color:`#134e4a`},l={width:164,minHeight:76,border:`2px solid #7c3aed`,background:`#f5f3ff`,color:`#3b0764`},u={background:`#f0f9ff`,borderColor:`#0284c7`},d={background:`#fff7ed`,borderColor:`#ea580c`,color:`#7c2d12`},f={animated:!1,type:`straight`,style:{stroke:`#2563eb`,strokeWidth:2},markerEnd:{type:n.ArrowClosed,color:`#2563eb`,width:18,height:18},labelStyle:{fontSize:13,fontWeight:650,fill:`#172554`},labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:`#ffffff`,fillOpacity:.92}};function p(e,n){let r=n===`horizontal`?t.Right:t.Bottom,i=n===`horizontal`?t.Left:t.Top;return e.map(e=>({...e,sourcePosition:e.sourcePosition||r,targetPosition:e.targetPosition||i,style:{...s,...e.style||{}}}))}function m({nodes:e,edges:t,height:n,minZoom:s=.55,direction:c=`vertical`}){return(0,o.jsx)(`div`,{style:{height:n,width:`100%`,border:`1px solid #dbe3ef`,borderRadius:8,margin:`20px 0`,overflow:`hidden`,background:`#fbfdff`},children:(0,o.jsxs)(i,{nodes:p(e,c),edges:t,defaultEdgeOptions:f,fitView:!0,fitViewOptions:{padding:.18,minZoom:s,maxZoom:1},minZoom:s,maxZoom:1.4,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[(0,o.jsx)(a,{color:`#d5deea`,gap:18}),(0,o.jsx)(r,{showInteractive:!1})]})})}function h(){return(0,o.jsx)(m,{nodes:[{id:`cargo`,position:{x:250,y:20},data:{label:`Cargo bench
harness = false`}},{id:`main`,position:{x:250,y:130},data:{label:`criterion_main!
生成 main()`},style:c},{id:`group`,position:{x:250,y:240},data:{label:`criterion_group!
构造 Criterion 并调用 targets`},style:c},{id:`api`,position:{x:250,y:350},data:{label:`bench_function
或 benchmark_group`}},{id:`analysis`,position:{x:250,y:460},data:{label:`analysis::common
统一执行微基准流程`},style:u}],edges:[{id:`e1`,source:`cargo`,target:`main`},{id:`e2`,source:`main`,target:`group`},{id:`e3`,source:`group`,target:`api`},{id:`e4`,source:`api`,target:`analysis`}],height:550,minZoom:.86})}function g(){return(0,o.jsx)(m,{nodes:[{id:`start`,position:{x:250,y:20},data:{label:`Benchmark start
创建 ReportContext`}},{id:`warmup`,position:{x:250,y:130},data:{label:`Warm-up
1, 2, 4... 次迭代
估计单次时间`},style:c},{id:`sampling`,position:{x:250,y:250},data:{label:`Sampling plan
根据目标时间生成
每个样本 iters`},style:c},{id:`measure`,position:{x:250,y:370},data:{label:`Measurement
调用 Bencher 计时循环
收集 times`}},{id:`analysis`,position:{x:250,y:490},data:{label:`Statistics
outliers + bootstrap
regression + estimates`},style:c},{id:`compare`,position:{x:250,y:610},data:{label:`Comparison
与 base 样本做 t-test
保存 new/base`},style:u}],edges:[{id:`e1`,source:`start`,target:`warmup`},{id:`e2`,source:`warmup`,target:`sampling`},{id:`e3`,source:`sampling`,target:`measure`},{id:`e4`,source:`measure`,target:`analysis`},{id:`e5`,source:`analysis`,target:`compare`}],height:710,minZoom:.84})}function _(){return(0,o.jsx)(m,{nodes:[{id:`met`,position:{x:250,y:20},data:{label:`warmup mean
met = elapsed / iters`}},{id:`auto`,position:{x:250,y:130},data:{label:`SamplingMode::Auto
估算 Linear 总时长`},style:l},{id:`linear`,position:{x:70,y:270},data:{label:`Linear
[d, 2d, ... Nd]
可做斜率回归`},style:c},{id:`flat`,position:{x:430,y:270},data:{label:`Flat
每个样本相同 iters
适合长耗时基准`},style:c},{id:`warning`,position:{x:250,y:420},data:{label:`目标时间不足时
给出增加时间或
降低样本数的建议`},style:d}],edges:[{id:`e1`,source:`met`,target:`auto`},{id:`e2`,source:`auto`,target:`linear`,label:`估算不超过 2x target`},{id:`e3`,source:`auto`,target:`flat`,label:`估算超过 2x target`},{id:`e4`,source:`linear`,target:`warning`},{id:`e5`,source:`flat`,target:`warning`}],height:520,minZoom:.76})}function v(){return(0,o.jsx)(m,{nodes:[{id:`iters`,position:{x:250,y:20},data:{label:`当前样本
b.iters = N`}},{id:`choose`,position:{x:250,y:130},data:{label:`用户选择计时循环`},style:l},{id:`iter`,position:{x:-20,y:270},data:{label:`iter
只测一次 start/end
循环内 black_box`},style:c},{id:`custom`,position:{x:190,y:270},data:{label:`iter_custom
用户返回测量值
适合外部进程`},style:c},{id:`batch`,position:{x:400,y:270},data:{label:`iter_batched/ref
setup 不计时
routine 分批计时`},style:c},{id:`drop`,position:{x:610,y:270},data:{label:`large_drop
把输出延后 drop
避免析构进计时`},style:c},{id:`value`,position:{x:250,y:430},data:{label:`measurement value
Duration 或自定义 Value
转成 f64 进入统计`},style:u}],edges:[{id:`e1`,source:`iters`,target:`choose`},{id:`e2`,source:`choose`,target:`iter`},{id:`e3`,source:`choose`,target:`custom`},{id:`e4`,source:`choose`,target:`batch`},{id:`e5`,source:`choose`,target:`drop`},{id:`e6`,source:`iter`,target:`value`},{id:`e7`,source:`custom`,target:`value`},{id:`e8`,source:`batch`,target:`value`},{id:`e9`,source:`drop`,target:`value`}],height:560,minZoom:.55,direction:`horizontal`})}function y(){return(0,o.jsx)(m,{nodes:[{id:`size`,position:{x:250,y:20},data:{label:`BatchSize
决定每批迭代数`},style:l},{id:`inputs`,position:{x:250,y:140},data:{label:`生成一批 inputs
setup() 不在 start/end 内`}},{id:`start`,position:{x:250,y:260},data:{label:`measurement.start()`},style:c},{id:`routine`,position:{x:250,y:380},data:{label:`对批内 inputs
执行 routine`},style:c},{id:`end`,position:{x:250,y:500},data:{label:`measurement.end()
累加到 value`},style:c},{id:`drop`,position:{x:250,y:620},data:{label:`black_box(outputs)
计时后再释放`},style:u}],edges:[{id:`e1`,source:`size`,target:`inputs`},{id:`e2`,source:`inputs`,target:`start`},{id:`e3`,source:`start`,target:`routine`},{id:`e4`,source:`routine`,target:`end`},{id:`e5`,source:`end`,target:`drop`}],height:710,minZoom:.85})}function b(){return(0,o.jsx)(m,{nodes:[{id:`sample`,position:{x:250,y:20},data:{label:`iters + times
avg_times = times / iters`}},{id:`tukey`,position:{x:70,y:160},data:{label:`Tukey fences
标注 mild/severe outliers
不删除样本`},style:c},{id:`bootstrap`,position:{x:250,y:160},data:{label:`Bootstrap
mean / median / SD / MAD
100000 默认重采样`},style:c},{id:`regression`,position:{x:460,y:160},data:{label:`Linear sampling only
OLS y = m * x
bootstrap slope`},style:c},{id:`estimate`,position:{x:250,y:330},data:{label:`Estimate
point + confidence interval
+ standard error`},style:u},{id:`json`,position:{x:250,y:450},data:{label:`estimates.json
sample.json
tukey.json`},style:u}],edges:[{id:`e1`,source:`sample`,target:`tukey`},{id:`e2`,source:`sample`,target:`bootstrap`},{id:`e3`,source:`sample`,target:`regression`},{id:`e4`,source:`tukey`,target:`estimate`},{id:`e5`,source:`bootstrap`,target:`estimate`},{id:`e6`,source:`regression`,target:`estimate`},{id:`e7`,source:`estimate`,target:`json`}],height:540,minZoom:.68})}function x(){return(0,o.jsx)(m,{nodes:[{id:`base`,position:{x:80,y:20},data:{label:`base/sample.json
上一轮样本`},style:u},{id:`new`,position:{x:420,y:20},data:{label:`new/sample.json
当前样本`},style:u},{id:`avg`,position:{x:250,y:150},data:{label:`两组 avg_times
elapsed / iters`}},{id:`ttest`,position:{x:250,y:270},data:{label:`mixed bootstrap
Welch t statistic
p-value`},style:c},{id:`relative`,position:{x:250,y:390},data:{label:`relative estimates
mean / median change`},style:c},{id:`noise`,position:{x:250,y:510},data:{label:`significance_level
+ noise_threshold
判定 regression / improvement`},style:d}],edges:[{id:`e1`,source:`base`,target:`avg`},{id:`e2`,source:`new`,target:`avg`},{id:`e3`,source:`avg`,target:`ttest`},{id:`e4`,source:`ttest`,target:`relative`},{id:`e5`,source:`relative`,target:`noise`}],height:610,minZoom:.78})}function S(){return(0,o.jsx)(m,{nodes:[{id:`samples`,position:{x:330,y:20},data:{label:`Repeated samples
或 repeated runs`}},{id:`classify`,position:{x:330,y:140},data:{label:`先判定 outlier 来源
测量噪声 / 真实长尾 / bug`},style:l},{id:`label`,position:{x:-20,y:300},data:{label:`Label and keep
Criterion.rs
pyperf`},style:c},{id:`trim`,position:{x:210,y:300},data:{label:`Configurable trim
BenchmarkDotNet
默认移除上侧 outlier`},style:d},{id:`stabilize`,position:{x:440,y:300},data:{label:`Warn and stabilize
hyperfine
Google Benchmark`},style:c},{id:`isolate`,position:{x:670,y:300},data:{label:`Runtime isolation
JMH forks/warmups
iai-callgrind counters`},style:c},{id:`report`,position:{x:330,y:470},data:{label:`输出 robust stats
median / MAD / percentile
histogram / raw samples`},style:u},{id:`decision`,position:{x:330,y:610},data:{label:`结论是否依赖长尾?`},style:l},{id:`tail`,position:{x:130,y:760},data:{label:`是
保留 outliers
报告 percentiles`},style:u},{id:`noise`,position:{x:530,y:760},data:{label:`否
修正环境或 benchmark
再考虑显式 trimming`},style:d}],edges:[{id:`e1`,source:`samples`,target:`classify`},{id:`e2`,source:`classify`,target:`label`},{id:`e3`,source:`classify`,target:`trim`},{id:`e4`,source:`classify`,target:`stabilize`},{id:`e5`,source:`classify`,target:`isolate`},{id:`e6`,source:`label`,target:`report`},{id:`e7`,source:`trim`,target:`report`},{id:`e8`,source:`stabilize`,target:`report`},{id:`e9`,source:`isolate`,target:`report`},{id:`e10`,source:`report`,target:`decision`},{id:`e11`,source:`decision`,target:`tail`,label:`tail 是信号`},{id:`e12`,source:`decision`,target:`noise`,label:`tail 是污染`}],height:890,minZoom:.58,direction:`horizontal`})}function C(){return(0,o.jsx)(m,{nodes:[{id:`macros`,position:{x:250,y:20},data:{label:`src/macros.rs
harness 入口`}},{id:`group`,position:{x:250,y:130},data:{label:`src/benchmark_group.rs
配置合并与 run_bench`}},{id:`routine`,position:{x:250,y:240},data:{label:`src/routine.rs
warm_up / sample / bench`},style:c},{id:`bencher`,position:{x:70,y:360},data:{label:`src/bencher.rs
计时循环模型`},style:c},{id:`sampling`,position:{x:430,y:360},data:{label:`src/lib.rs
SamplingMode / BatchSize`},style:c},{id:`analysis`,position:{x:250,y:500},data:{label:`src/analysis/
bootstrap / regression / compare`},style:c},{id:`stats`,position:{x:250,y:620},data:{label:`src/stats/
Sample / Distribution / Tukey`}},{id:`report`,position:{x:250,y:740},data:{label:`src/report.rs + html/plot
CLI/JSON/SVG 报告`},style:u}],edges:[{id:`e1`,source:`macros`,target:`group`},{id:`e2`,source:`group`,target:`routine`},{id:`e3`,source:`routine`,target:`bencher`},{id:`e4`,source:`routine`,target:`sampling`},{id:`e5`,source:`routine`,target:`analysis`},{id:`e6`,source:`analysis`,target:`stats`},{id:`e7`,source:`stats`,target:`report`}],height:840,minZoom:.82})}export{x as BaselineCompareFlow,y as BatchedIsolationFlow,v as BencherLoopFlow,h as CriterionEntryFlow,g as CriterionLifecycleFlow,C as CriterionSourceMapFlow,S as OutlierStrategyFlow,_ as SamplingModeFlow,b as StatisticsFlow};