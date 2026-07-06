import{t as e}from"./jsx-runtime.DPvsry6Z.js";import{a as t,i as n,n as r,r as i,t as a}from"./style.CAM1shzb.js";var o=e(),s={width:178,minHeight:68,border:`2px solid #2563eb`,borderRadius:8,background:`#eff6ff`,color:`#172554`,fontSize:14,fontWeight:650,lineHeight:1.35,padding:10,whiteSpace:`pre-line`,boxShadow:`0 1px 3px rgba(15, 23, 42, 0.12)`},c={width:198,minHeight:78,border:`2px solid #0f766e`,background:`#ecfdf5`,color:`#134e4a`},l={width:162,minHeight:76,border:`2px solid #7c3aed`,background:`#f5f3ff`,color:`#3b0764`},u={background:`#fff7ed`,borderColor:`#ea580c`,color:`#7c2d12`},d={background:`#f0fdf4`,borderColor:`#16a34a`,color:`#14532d`},f={animated:!1,type:`straight`,style:{stroke:`#2563eb`,strokeWidth:2},markerEnd:{type:n.ArrowClosed,color:`#2563eb`,width:18,height:18},labelStyle:{fontSize:13,fontWeight:650,fill:`#172554`},labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:`#ffffff`,fillOpacity:.92}};function p(e,n){let r=n===`horizontal`?t.Right:t.Bottom,i=n===`horizontal`?t.Left:t.Top;return e.map(e=>({...e,sourcePosition:e.sourcePosition||r,targetPosition:e.targetPosition||i,style:{...s,...e.style||{}}}))}function m({nodes:e,edges:t,height:n,minZoom:s=.55,direction:c=`vertical`}){return(0,o.jsx)(`div`,{style:{height:n,width:`100%`,border:`1px solid #dbe3ef`,borderRadius:8,margin:`20px 0`,overflow:`hidden`,background:`#fbfdff`},children:(0,o.jsxs)(i,{nodes:p(e,c),edges:t,defaultEdgeOptions:f,fitView:!0,fitViewOptions:{padding:.18,minZoom:s,maxZoom:1},minZoom:s,maxZoom:1.4,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[(0,o.jsx)(a,{color:`#d5deea`,gap:18}),(0,o.jsx)(r,{showInteractive:!1})]})})}function h(){return(0,o.jsx)(m,{nodes:[{id:`client`,position:{x:250,y:20},data:{label:`1. OpenAI 客户端
/v1/chat/completions`}},{id:`router`,position:{x:250,y:130},data:{label:`2. FastAPI 路由
校验 JSON / 取消感知`},style:c},{id:`serving`,position:{x:250,y:250},data:{label:`3. OpenAIServingChat
渲染模板 / 采样参数`},style:c},{id:`async`,position:{x:250,y:370},data:{label:`4. AsyncLLM.generate
每请求输出队列`},style:c},{id:`core`,position:{x:250,y:490},data:{label:`5. EngineCore
后台循环调度 + 执行`}},{id:`stream`,position:{x:250,y:610},data:{label:`6. SSE 流式返回
逐 token 输出`},style:d}],edges:[{id:`e1`,source:`client`,target:`router`},{id:`e2`,source:`router`,target:`serving`},{id:`e3`,source:`serving`,target:`async`},{id:`e4`,source:`async`,target:`core`},{id:`e5`,source:`core`,target:`stream`}],height:700,minZoom:.8})}function g(){return(0,o.jsx)(m,{nodes:[{id:`api`,position:{x:250,y:20},data:{label:`入口层
FastAPI / OpenAI 协议
请求取消 / 认证 / metrics`},style:c},{id:`async`,position:{x:250,y:150},data:{label:`会话层
AsyncLLM
InputProcessor / OutputProcessor`},style:c},{id:`coreclient`,position:{x:250,y:280},data:{label:`进程边界
EngineCoreClient
ZMQ + 后台进程`}},{id:`core`,position:{x:250,y:410},data:{label:`核心循环
EngineCore.step
调度 / 执行 / 更新状态`},style:c},{id:`sched`,position:{x:40,y:540},data:{label:`Scheduler
running / waiting
Token budget`},style:c},{id:`kv`,position:{x:250,y:540},data:{label:`KVCacheManager
块池 / 前缀缓存
抢占与水位线`},style:c},{id:`gpu`,position:{x:460,y:540},data:{label:`GPUModelRunner
注意力元数据
CUDA Graph / 采样`},style:c}],edges:[{id:`e1`,source:`api`,target:`async`},{id:`e2`,source:`async`,target:`coreclient`},{id:`e3`,source:`coreclient`,target:`core`},{id:`e4`,source:`core`,target:`sched`},{id:`e5`,source:`sched`,target:`kv`},{id:`e6`,source:`sched`,target:`gpu`},{id:`e7`,source:`gpu`,target:`core`}],height:640,minZoom:.72})}function _(){return(0,o.jsx)(m,{nodes:[{id:`add`,position:{x:250,y:20},data:{label:`add_request
输入转 EngineCoreRequest`}},{id:`collector`,position:{x:250,y:130},data:{label:`RequestOutputCollector
每请求队列`},style:c},{id:`handler`,position:{x:30,y:250},data:{label:`output_handler
从 EngineCore 拉输出`},style:c},{id:`generator`,position:{x:470,y:250},data:{label:`generate 循环
q.get_nowait 或 await q.get`},style:c},{id:`abort`,position:{x:250,y:380},data:{label:`客户端断开
CancelledError / GeneratorExit`},style:u},{id:`result`,position:{x:250,y:500},data:{label:`RequestOutput
返回 HTTP 流`},style:d}],edges:[{id:`e1`,source:`add`,target:`collector`},{id:`e2`,source:`handler`,target:`collector`},{id:`e3`,source:`collector`,target:`generator`},{id:`e4`,source:`generator`,target:`result`},{id:`e5`,source:`generator`,target:`abort`,label:`取消`},{id:`e6`,source:`abort`,target:`handler`,label:`abort`}],height:590,minZoom:.74})}function v(){return(0,o.jsx)(m,{nodes:[{id:`start`,position:{x:250,y:20},data:{label:`schedule()
新一轮 engine step`}},{id:`budget`,position:{x:250,y:130},data:{label:`Token budget
max_num_scheduled_tokens`},style:l},{id:`running`,position:{x:70,y:250},data:{label:`先调度 running
补齐 decode / prefill chunk`},style:c},{id:`alloc1`,position:{x:70,y:380},data:{label:`allocate_slots
不够则抢占低优先级请求`},style:u},{id:`waiting`,position:{x:430,y:250},data:{label:`再接纳 waiting
受 max_num_seqs 限制`},style:c},{id:`cache`,position:{x:430,y:380},data:{label:`查询前缀缓存
本地命中 / 远程 KV`}},{id:`output`,position:{x:250,y:510},data:{label:`SchedulerOutput
new / cached / blocks / specs`},style:d}],edges:[{id:`e1`,source:`start`,target:`budget`},{id:`e2`,source:`budget`,target:`running`},{id:`e3`,source:`running`,target:`alloc1`},{id:`e4`,source:`budget`,target:`waiting`},{id:`e5`,source:`waiting`,target:`cache`},{id:`e6`,source:`alloc1`,target:`output`},{id:`e7`,source:`cache`,target:`output`}],height:600,minZoom:.76})}function y(){return(0,o.jsx)(m,{nodes:[{id:`request`,position:{x:250,y:20},data:{label:`请求 token 序列
prompt + output + lookahead`}},{id:`blocks`,position:{x:250,y:135},data:{label:`KVCacheBlock
block_id / ref_cnt / block_hash`},style:c},{id:`pool`,position:{x:70,y:270},data:{label:`BlockPool
所有 GPU 块`},style:c},{id:`free`,position:{x:430,y:270},data:{label:`free_block_queue
空闲块 + 可淘汰缓存块`},style:c},{id:`hit`,position:{x:70,y:410},data:{label:`前缀命中
touch 增加引用`},style:d},{id:`miss`,position:{x:430,y:410},data:{label:`未命中
分配新块 / 淘汰旧块`},style:u}],edges:[{id:`e1`,source:`request`,target:`blocks`},{id:`e2`,source:`blocks`,target:`pool`},{id:`e3`,source:`blocks`,target:`free`},{id:`e4`,source:`pool`,target:`hit`},{id:`e5`,source:`free`,target:`miss`}],height:520,minZoom:.82})}function b(){return(0,o.jsx)(m,{nodes:[{id:`has`,position:{x:250,y:20},data:{label:`scheduler.has_requests?`},style:l},{id:`schedule`,position:{x:250,y:140},data:{label:`Scheduler.schedule
生成执行计划`},style:c},{id:`execute`,position:{x:250,y:260},data:{label:`model_executor.execute_model
非阻塞提交 GPU 工作`},style:c},{id:`grammar`,position:{x:50,y:380},data:{label:`结构化输出
grammar bitmask`}},{id:`sample`,position:{x:450,y:380},data:{label:`sample_tokens
采样 / 推测解码`}},{id:`update`,position:{x:250,y:500},data:{label:`update_from_output
追加 token / 释放资源`},style:d}],edges:[{id:`e1`,source:`has`,target:`schedule`},{id:`e2`,source:`schedule`,target:`execute`},{id:`e3`,source:`schedule`,target:`grammar`},{id:`e4`,source:`execute`,target:`sample`},{id:`e5`,source:`grammar`,target:`sample`},{id:`e6`,source:`sample`,target:`update`}],height:590,minZoom:.78})}function x(){return(0,o.jsx)(m,{nodes:[{id:`state`,position:{x:250,y:20},data:{label:`SchedulerOutput
本轮 token 与块表`}},{id:`batch`,position:{x:250,y:130},data:{label:`_update_states
维护 persistent batch`},style:c},{id:`inputs`,position:{x:70,y:250},data:{label:`_prepare_inputs
input_ids / positions / logits_indices`},style:c},{id:`attn`,position:{x:430,y:250},data:{label:`_build_attention_metadata
block table / slot mapping`},style:c},{id:`graph`,position:{x:250,y:380},data:{label:`选择执行路径
CUDA Graph / eager / ubatch`},style:l},{id:`forward`,position:{x:250,y:500},data:{label:`model forward
logits / hidden states`},style:d}],edges:[{id:`e1`,source:`state`,target:`batch`},{id:`e2`,source:`batch`,target:`inputs`},{id:`e3`,source:`batch`,target:`attn`},{id:`e4`,source:`inputs`,target:`graph`},{id:`e5`,source:`attn`,target:`graph`},{id:`e6`,source:`graph`,target:`forward`}],height:590,minZoom:.78})}function S(){return(0,o.jsx)(m,{nodes:[{id:`latency`,position:{x:40,y:40},data:{label:`低首 token 延迟
小批次 / 频繁流式发送`},style:d},{id:`throughput`,position:{x:430,y:40},data:{label:`高吞吐
大 token budget / 批量发送`},style:d},{id:`budget`,position:{x:235,y:190},data:{label:`max_num_batched_tokens
max_num_seqs
stream_interval`},style:l},{id:`memory`,position:{x:40,y:340},data:{label:`KV 内存稳定
watermark / full ISL gate`},style:c},{id:`fairness`,position:{x:430,y:340},data:{label:`公平与优先级
FCFS / priority / preemption`},style:c}],edges:[{id:`e1`,source:`latency`,target:`budget`},{id:`e2`,source:`throughput`,target:`budget`},{id:`e3`,source:`budget`,target:`memory`},{id:`e4`,source:`budget`,target:`fairness`}],height:480,minZoom:.82})}function C(){return(0,o.jsx)(m,{nodes:[{id:`api`,position:{x:250,y:20},data:{label:`1. API 入口
api_router.py
serving.py`}},{id:`async`,position:{x:250,y:135},data:{label:`2. 异步客户端
async_llm.py
core_client.py`}},{id:`core`,position:{x:250,y:250},data:{label:`3. 引擎主循环
engine/core.py`},style:c},{id:`sched`,position:{x:50,y:365},data:{label:`4a. 调度
scheduler.py`},style:c},{id:`kv`,position:{x:250,y:365},data:{label:`4b. KV 块管理
kv_cache_manager.py
block_pool.py`},style:c},{id:`gpu`,position:{x:450,y:365},data:{label:`4c. GPU 执行
gpu_model_runner.py`},style:c},{id:`config`,position:{x:250,y:500},data:{label:`5. 调参入口
config/scheduler.py
engine/arg_utils.py`},style:d}],edges:[{id:`e1`,source:`api`,target:`async`},{id:`e2`,source:`async`,target:`core`},{id:`e3`,source:`core`,target:`sched`},{id:`e4`,source:`core`,target:`kv`},{id:`e5`,source:`core`,target:`gpu`},{id:`e6`,source:`sched`,target:`config`},{id:`e7`,source:`kv`,target:`config`},{id:`e8`,source:`gpu`,target:`config`}],height:590,minZoom:.74})}function w(){return(0,o.jsx)(m,{nodes:[{id:`user`,position:{x:250,y:10},data:{label:`用户请求
(Prompt 输入)`}},{id:`engine`,position:{x:250,y:130},data:{label:`推理引擎 (System)
负责队列、调度、KV 管理
最大化硬件利用率`},style:c},{id:`llm`,position:{x:250,y:260},data:{label:`LLM 模型 (Model)
参数完全只读 (Read-Only)
执行 Forward 前向计算图`}},{id:`train`,position:{x:50,y:390},data:{label:`对比：模型训练
Forward + Backward
更新权重 / 保存激活值`},style:u},{id:`inf`,position:{x:450,y:390},data:{label:`对比：模型推理
仅 Forward 前向计算
参数冻结 / 极其注重并发`},style:d}],edges:[{id:`e1`,source:`user`,target:`engine`},{id:`e2`,source:`engine`,target:`llm`,label:`调度与喂数`},{id:`e3`,source:`llm`,target:`engine`,label:`返回预测 Logits`},{id:`e4`,source:`llm`,target:`train`,label:`训练阶段`},{id:`e5`,source:`llm`,target:`inf`,label:`推理阶段`}],height:500,minZoom:.8})}function T(){return(0,o.jsx)(m,{nodes:[{id:`input`,position:{x:250,y:10},data:{label:`当前 Token
(由 Tokenizer 转换 ID)`}},{id:`qkv`,position:{x:250,y:120},data:{label:`投影与注意力映射
计算得到当前 Q, K, V`},style:c},{id:`cache`,position:{x:50,y:240},data:{label:`KV Cache 存储
缓存并读取历史的 K, V`},style:d},{id:`attn`,position:{x:250,y:360},data:{label:`Attention 矩阵乘
Q 与历史 K 计算权重
并对 V 进行加权求和`}},{id:`output`,position:{x:250,y:480},data:{label:`生成下一个 Token
自回归输入下一轮计算`},style:d}],edges:[{id:`e1`,source:`input`,target:`qkv`},{id:`e2`,source:`qkv`,target:`attn`,label:`Query (查询)`},{id:`e3`,source:`qkv`,target:`cache`,label:`新 K/V 存入`},{id:`e4`,source:`cache`,target:`attn`,label:`历史 K/V 读取`},{id:`e5`,source:`attn`,target:`output`}],height:580,minZoom:.8})}function E(){return(0,o.jsx)(m,{nodes:[{id:`problem`,position:{x:250,y:10},data:{label:`传统连续分配问题
内部/保留/外部碎片严重
浪费大量 GPU 显存`},style:u},{id:`paged_attn`,position:{x:250,y:130},data:{label:`PagedAttention 优化
虚拟内存分页思想
KV 划分为固定物理块`},style:d},{id:`block_table`,position:{x:50,y:260},data:{label:`Block Table (块表)
逻辑位置 ➜ 非连续物理显存`}},{id:`nanovllm`,position:{x:450,y:260},data:{label:`nano-vLLM 极简原型
忽略工程细节
还原核心调度与 batching`}},{id:`non_contig`,position:{x:250,y:390},data:{label:`优化结果
碎片降至 ~0% / 显存利用 >96%
吞吐量提升 2-4 倍`},style:d}],edges:[{id:`e1`,source:`problem`,target:`paged_attn`},{id:`e2`,source:`paged_attn`,target:`block_table`},{id:`e3`,source:`paged_attn`,target:`nanovllm`},{id:`e4`,source:`block_table`,target:`non_contig`},{id:`e5`,source:`nanovllm`,target:`non_contig`}],height:500,minZoom:.8})}export{g as VllmArchitectureFlow,_ as VllmAsyncQueueFlow,w as VllmConceptIntroFlow,b as VllmEngineStepFlow,E as VllmEngineeringOptimizationsFlow,x as VllmGpuRunnerFlow,y as VllmKvBlockFlow,h as VllmRequestPipelineFlow,v as VllmSchedulerFlow,C as VllmSourceMapFlow,S as VllmTradeoffFlow,T as VllmTransformerInferenceFlow};