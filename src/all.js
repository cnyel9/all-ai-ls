const _0x1e5d27=_0x3f4d;(function(_0x4d1569,_0x568ac2){const _0x4e00eb=_0x3f4d,_0x2a7045=_0x4d1569();while(!![]){try{const _0xb8a5bb=-parseInt(_0x4e00eb(0x108))/0x1+-parseInt(_0x4e00eb(0xb6))/0x2*(-parseInt(_0x4e00eb(0xcc))/0x3)+-parseInt(_0x4e00eb(0xee))/0x4+parseInt(_0x4e00eb(0xc7))/0x5*(-parseInt(_0x4e00eb(0xe1))/0x6)+parseInt(_0x4e00eb(0xe7))/0x7+-parseInt(_0x4e00eb(0x106))/0x8*(parseInt(_0x4e00eb(0xce))/0x9)+parseInt(_0x4e00eb(0xf7))/0xa*(-parseInt(_0x4e00eb(0xe2))/0xb);if(_0xb8a5bb===_0x568ac2)break;else _0x2a7045['push'](_0x2a7045['shift']());}catch(_0x1df6db){_0x2a7045['push'](_0x2a7045['shift']());}}}(_0x4015,0x5d7b9));const models=[{'id':_0x1e5d27(0xe3),'name':'Gemini','endpoint':_0x1e5d27(0x111)},{'id':_0x1e5d27(0xe8),'name':'OpenChat','endpoint':_0x1e5d27(0xf1)},{'id':_0x1e5d27(0xcb),'name':'GPT-4o','endpoint':'/ai/gpt4o'},{'id':_0x1e5d27(0xfd),'name':'GPT-4o-mini','endpoint':_0x1e5d27(0x101)},{'id':_0x1e5d27(0x12e),'name':_0x1e5d27(0xcf),'endpoint':_0x1e5d27(0xca)},{'id':_0x1e5d27(0x116),'name':_0x1e5d27(0x11f),'endpoint':_0x1e5d27(0xe6)},{'id':_0x1e5d27(0xc9),'name':_0x1e5d27(0x10f),'endpoint':'/ai/llama3'},{'id':_0x1e5d27(0x120),'name':_0x1e5d27(0x127),'endpoint':'/ai/claude'},{'id':'wizardlm','name':_0x1e5d27(0xb8),'endpoint':_0x1e5d27(0xde)},{'id':'gemma','name':_0x1e5d27(0xa5),'endpoint':_0x1e5d27(0xaa)},{'id':_0x1e5d27(0xd5),'name':_0x1e5d27(0xef),'endpoint':_0x1e5d27(0xdf)},{'id':_0x1e5d27(0xf5),'name':_0x1e5d27(0x131),'endpoint':_0x1e5d27(0x121)},{'id':'yi','name':'Yi','endpoint':_0x1e5d27(0xa9)},{'id':_0x1e5d27(0x12f),'name':_0x1e5d27(0xb3),'endpoint':'/ai/solarpro'},{'id':'mixtral','name':_0x1e5d27(0xec),'endpoint':_0x1e5d27(0xfa)},{'id':_0x1e5d27(0xfb),'name':_0x1e5d27(0x12c),'endpoint':_0x1e5d27(0x125)}];function _0x3f4d(_0x563bdf,_0xe72a45){const _0x40159d=_0x4015();return _0x3f4d=function(_0x3f4dcc,_0x13025e){_0x3f4dcc=_0x3f4dcc-0xa5;let _0x3cd38f=_0x40159d[_0x3f4dcc];return _0x3cd38f;},_0x3f4d(_0x563bdf,_0xe72a45);}let selectedModel=models[0x0],isLoading=![],conversationHistory=[];feather['replace']();const modelButton=document[_0x1e5d27(0xfe)](_0x1e5d27(0xb2)),modelDropdown=document['getElementById']('modelDropdown'),messageContainer=document[_0x1e5d27(0xfe)](_0x1e5d27(0xdc)),messageInput=document['getElementById']('messageInput'),sendButton=document[_0x1e5d27(0xfe)](_0x1e5d27(0xae));models[_0x1e5d27(0x123)](_0x4353d5=>{const _0x3b30a4=_0x1e5d27,_0x5934a3=document['createElement'](_0x3b30a4(0xf3));_0x5934a3[_0x3b30a4(0xda)]=_0x3b30a4(0x11e),_0x5934a3[_0x3b30a4(0x105)]=_0x3b30a4(0xc8)+_0x4353d5[_0x3b30a4(0xb1)]+'\x0a\x20\x20\x20\x20\x20\x20',_0x5934a3[_0x3b30a4(0xbf)]=()=>{const _0x11886d=_0x3b30a4;selectedModel=_0x4353d5,document[_0x11886d(0xfe)]('selectedModelName')[_0x11886d(0x100)]=_0x4353d5[_0x11886d(0xb1)],modelDropdown['classList'][_0x11886d(0xbc)](_0x11886d(0xf0)),feather[_0x11886d(0xac)]();},modelDropdown[_0x3b30a4(0xc6)](_0x5934a3);}),modelButton[_0x1e5d27(0xbf)]=()=>modelDropdown['classList'][_0x1e5d27(0xf9)](_0x1e5d27(0xf0)),document['addEventListener'](_0x1e5d27(0x11d),_0x62841=>{const _0x364f4e=_0x1e5d27;!modelButton[_0x364f4e(0x12d)](_0x62841[_0x364f4e(0xc3)])&&!modelDropdown['contains'](_0x62841[_0x364f4e(0xc3)])&&modelDropdown[_0x364f4e(0xb7)][_0x364f4e(0xbc)]('hidden');});function formatCodeBlocks(_0x3041f4){const _0x41d58d=_0x1e5d27,_0x1799c8=_0x3041f4[_0x41d58d(0xac)](/```(\w+)?\n([\s\S]*?)```/g,(_0x7300de,_0x4fd829,_0x429c5e)=>{const _0x355a29=_0x41d58d,_0x1022f5=_0x4fd829||_0x355a29(0x10e),_0x1d3743=Prism[_0x355a29(0xd2)](_0x429c5e[_0x355a29(0xe0)](),Prism['languages'][_0x1022f5]||Prism[_0x355a29(0xeb)]['plaintext'],_0x1022f5);return _0x355a29(0xd4)+_0x1022f5+'\x22>'+_0x1d3743+'</code></pre>';});return marked['parse'](_0x1799c8);}function cleanResponse(_0x5cfe43){const _0x28c13f=_0x1e5d27;try{const _0x5824b8=JSON[_0x28c13f(0xa8)](_0x5cfe43);if(_0x5824b8[_0x28c13f(0x132)])return _0x5824b8[_0x28c13f(0x132)];}catch(_0x213636){return _0x5cfe43;}return _0x5cfe43;}function toggleLoading(_0x2ac11a){const _0x42d62b=_0x1e5d27;if(_0x2ac11a){const _0x375ebf=document[_0x42d62b(0xd7)](_0x42d62b(0xcd));_0x375ebf['id']=_0x42d62b(0xe4),_0x375ebf[_0x42d62b(0xda)]=_0x42d62b(0x107),_0x375ebf[_0x42d62b(0x105)]=_0x42d62b(0xea),messageContainer[_0x42d62b(0xc6)](_0x375ebf),messageContainer[_0x42d62b(0x117)]=messageContainer[_0x42d62b(0xb4)];}else{const _0xfabe54=document[_0x42d62b(0xfe)](_0x42d62b(0xe4));if(_0xfabe54)_0xfabe54[_0x42d62b(0x104)]();}}function _0x4015(){const _0x1d1c20=['flex\x20items-start\x20gap-3\x20','messageContainer','bg-purple-600\x20text-white','/ai/wizardlm','/ai/qwen2','trim','6dTNWmV','517649ctutfW','gemini','loadingIndicator','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22','/ai/gpt3','3980172zBXMJT','openchat','value','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22animate-spin\x20rounded-full\x20h-4\x20w-4\x20border-2\x20border-purple-500\x20border-t-transparent\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22loading-dots\x22>Thinking</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','languages','Mixtral','rounded','1891324thJPWb','Qwen2','hidden','/ai/openchat','?text=','button','shift','phi3','text-white','10PAqNIg','assistant','toggle','/ai/mixtral','llama-vision','length','gpt4omini','getElementById','&model=llama-3.2-11b-vision-instruct','textContent','/ai/gpt4omini','pre','py-1','remove','innerHTML','16UgXcmw','flex\x20items-center\x20gap-2\x20text-gray-500','84885hvOAWw','absolute','relative','Response\x20received:','\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20<rect\x20x=\x229\x22\x20y=\x229\x22\x20width=\x2213\x22\x20height=\x2213\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x2015H4a2\x202\x200\x200\x201-2-2V4a2\x202\x200\x200\x201\x202-2h9a2\x202\x200\x200\x201\x202\x202v1\x22></path>\x0a\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20Copy\x0a\x20\x20','user','plaintext','LLaMa\x203-8B','px-4\x20py-2\x20bg-red-500\x20text-white\x20rounded-lg\x20hover:bg-red-600','/ai/gemini','bg-white\x20shadow-md','onkeypress','HTTP\x20error!\x20status:\x20','status','gpt3','scrollTop','copy-code-button','catch','header','Sorry,\x20there\x20was\x20an\x20error\x20processing\x20your\x20request:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20x=\x229\x22\x20y=\x229\x22\x20width=\x2213\x22\x20height=\x2213\x22\x20rx=\x222\x22\x20ry=\x222\x22></rect>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M5\x2015H4a2\x202\x200\x200\x201-2-2V4a2\x202\x200\x200\x201\x202-2h9a2\x202\x200\x200\x201\x202\x202v1\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Copy\x0a\x20\x20\x20\x20\x20\x20\x20\x20','click','w-full\x20px-4\x20py-2\x20text-left\x20hover:bg-gray-50\x20flex\x20items-center\x20gap-2','GPT-3.5-Turbo','claude','/ai/phi3','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20class=\x22text-green-400\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<polyline\x20points=\x2220\x206\x209\x2017\x204\x2012\x22></polyline>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Copied!\x0a\x20\x20\x20\x20\x20\x20','forEach','text-red-500','/ai/llama','px-2','Claude','right-2','text-xs','bg-gray-700','application/json','LLaMa\x203.2-11B\x20Vision','contains','gpt4','solarpro','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message-content\x20','Phi3','message','Gemma','Error:','Copy','parse','/ai/yi','/ai/gemma','complete','replace','log','sendButton','endpoint','querySelector','name','modelButton','SolarPro','scrollHeight','key','2ewCoup','classList','WizardLM','Reset\x20Conversation','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20','style','add','Gagal\x20menyalin\x20kode:','disabled','onclick','position','https://api.paxsenix.biz.id','text-gray-800','target','flex-row-reverse','hooks','appendChild','14755UyJpqF','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20data-feather=\x22cpu\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','llama3','/ai/gpt4','gpt4o','1281777xjSQPB','div','23508RjxxNx','GPT-4-Turbo','\x22></i>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22font-medium\x22>','push','highlight','cpu','<pre><code\x20class=\x22language-','qwen2','.copy-code-button','createElement','duration-200','top-2','className'];_0x4015=function(){return _0x1d1c20;};return _0x4015();}function addCopyCodeButtons(){setTimeout(()=>{const _0x420dbd=_0x3f4d;document['querySelectorAll'](_0x420dbd(0x102))['forEach'](_0x1d9ad8=>{const _0x170747=_0x420dbd;if(_0x1d9ad8[_0x170747(0xb0)](_0x170747(0xd6)))return;const _0x2d2bf8=document[_0x170747(0xd7)]('button');_0x2d2bf8[_0x170747(0x100)]=_0x170747(0xa7),_0x2d2bf8['classList'][_0x170747(0xbc)](_0x170747(0x118),_0x170747(0x109),_0x170747(0xd9),_0x170747(0x128),_0x170747(0x12a),'text-white',_0x170747(0x126),_0x170747(0x103),_0x170747(0xed),_0x170747(0x129),'z-10','hover:bg-gray-600','transition',_0x170747(0xd8)),_0x2d2bf8[_0x170747(0x105)]=_0x170747(0x10c),_0x2d2bf8[_0x170747(0xbf)]=()=>{const _0x382f14=_0x170747,_0x413b50=_0x1d9ad8[_0x382f14(0x100)][_0x382f14(0xe0)]();navigator['clipboard']['writeText'](_0x413b50)['then'](()=>{const _0x298fdb=_0x382f14;_0x2d2bf8[_0x298fdb(0x105)]=_0x298fdb(0x122),setTimeout(()=>{const _0x54cbe1=_0x298fdb;_0x2d2bf8[_0x54cbe1(0x105)]=_0x54cbe1(0x11c);},0x7d0);})[_0x382f14(0x119)](_0x3a50ae=>{const _0xdd7224=_0x382f14;console['error'](_0xdd7224(0xbd),_0x3a50ae),_0x2d2bf8[_0xdd7224(0x100)]='Copy\x20Failed',_0x2d2bf8[_0xdd7224(0xb7)][_0xdd7224(0xbc)](_0xdd7224(0x124)),setTimeout(()=>{const _0x54aa1b=_0xdd7224;_0x2d2bf8['textContent']=_0x54aa1b(0xa7),_0x2d2bf8['classList'][_0x54aa1b(0x104)](_0x54aa1b(0x124));},0x7d0);});},_0x1d9ad8[_0x170747(0xbb)][_0x170747(0xc0)]=_0x170747(0x10a),_0x1d9ad8['appendChild'](_0x2d2bf8);});},0x1f4);}function addMessage(_0x144d0d,_0x469c5d){const _0x5bef70=_0x1e5d27,_0x2e36ab=document[_0x5bef70(0xd7)](_0x5bef70(0xcd));_0x2e36ab['className']=_0x5bef70(0xdb)+(_0x469c5d?_0x5bef70(0xc4):'');const _0x403b51=_0x469c5d?_0x144d0d:cleanResponse(_0x144d0d),_0x2a05dc=_0x469c5d?_0x403b51:formatCodeBlocks(_0x403b51);conversationHistory[_0x5bef70(0xd1)]({'role':_0x469c5d?_0x5bef70(0x10d):_0x5bef70(0xf8),'content':_0x403b51}),conversationHistory[_0x5bef70(0xfc)]>0xa&&conversationHistory[_0x5bef70(0xf4)](),_0x2e36ab[_0x5bef70(0x105)]=_0x5bef70(0xe5)+(_0x469c5d?_0x5bef70(0xdd):_0x5bef70(0x112))+'\x20p-3\x20rounded-lg\x20max-w-[80%]\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20items-center\x20gap-2\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20data-feather=\x22'+(_0x469c5d?_0x5bef70(0x10d):_0x5bef70(0xd3))+_0x5bef70(0xd0)+(_0x469c5d?'You':selectedModel[_0x5bef70(0xb1)])+_0x5bef70(0x130)+(_0x469c5d?_0x5bef70(0xf6):_0x5bef70(0xc2))+'\x22>'+_0x2a05dc+_0x5bef70(0xba),messageContainer[_0x5bef70(0xc6)](_0x2e36ab),feather[_0x5bef70(0xac)](),Prism['highlightAll'](),messageContainer[_0x5bef70(0x117)]=messageContainer[_0x5bef70(0xb4)],addCopyCodeButtons();}Prism[_0x1e5d27(0xc5)]['add'](_0x1e5d27(0xab),_0xf7aea2=>{addCopyCodeButtons();});async function sendMessage(){const _0x4bd269=_0x1e5d27,_0x587152=messageInput[_0x4bd269(0xe9)]['trim']();if(!_0x587152||isLoading)return;addMessage(_0x587152,!![]),messageInput['value']='',isLoading=!![],toggleLoading(!![]),sendButton[_0x4bd269(0xbe)]=!![];try{const _0x5507a2=await fetch(_0x4bd269(0xc1)+selectedModel['endpoint']+'?text='+encodeURIComponent(_0x587152),{'method':'GET','headers':{'Content-Type':_0x4bd269(0x12b)}});if(!_0x5507a2['ok'])throw new Error(_0x4bd269(0x114)+_0x5507a2[_0x4bd269(0x115)]);const _0x3a5a34=await _0x5507a2['text']();console[_0x4bd269(0xad)](_0x4bd269(0x10b),_0x3a5a34),addMessage(_0x3a5a34,![]);}catch(_0x4eda63){console['error'](_0x4bd269(0xa6),_0x4eda63),addMessage(_0x4bd269(0x11b)+_0x4eda63[_0x4bd269(0x132)],![]);}finally{isLoading=![],toggleLoading(![]),sendButton[_0x4bd269(0xbe)]=![];}}async function sendMessage(){const _0x4167fd=_0x1e5d27,_0x1002d2=messageInput[_0x4167fd(0xe9)][_0x4167fd(0xe0)]();if(!_0x1002d2||isLoading)return;addMessage(_0x1002d2,!![]),messageInput[_0x4167fd(0xe9)]='',isLoading=!![],toggleLoading(!![]),sendButton['disabled']=!![];try{let _0x6f6562;selectedModel['id']==='llama-vision'?_0x6f6562='https://api.paxsenix.biz.id'+selectedModel[_0x4167fd(0xaf)]+_0x4167fd(0xf2)+encodeURIComponent(_0x1002d2)+_0x4167fd(0xff):_0x6f6562=_0x4167fd(0xc1)+selectedModel[_0x4167fd(0xaf)]+_0x4167fd(0xf2)+encodeURIComponent(_0x1002d2);const _0x2ae0d0=await fetch(_0x6f6562,{'method':'GET','headers':{'Content-Type':_0x4167fd(0x12b)}});if(!_0x2ae0d0['ok'])throw new Error(_0x4167fd(0x114)+_0x2ae0d0[_0x4167fd(0x115)]);const _0x36799f=await _0x2ae0d0['text']();console[_0x4167fd(0xad)](_0x4167fd(0x10b),_0x36799f),addMessage(_0x36799f,![]);}catch(_0x394b3d){console['error']('Error:',_0x394b3d),addMessage(_0x4167fd(0x11b)+_0x394b3d[_0x4167fd(0x132)],![]);}finally{isLoading=![],toggleLoading(![]),sendButton['disabled']=![];}}function resetConversation(){conversationHistory=[],messageContainer['innerHTML']='';}function addResetButton(){const _0x1a4a64=_0x1e5d27,_0x37c330=document[_0x1a4a64(0xd7)](_0x1a4a64(0xf3));_0x37c330[_0x1a4a64(0x100)]=_0x1a4a64(0xb9),_0x37c330[_0x1a4a64(0xda)]=_0x1a4a64(0x110),_0x37c330[_0x1a4a64(0xbf)]=resetConversation;const _0xe52bce=document['querySelector'](_0x1a4a64(0x11a));_0xe52bce[_0x1a4a64(0xc6)](_0x37c330);}addResetButton(),sendButton[_0x1e5d27(0xbf)]=sendMessage,messageInput[_0x1e5d27(0x113)]=_0x2da725=>{const _0x9e77e4=_0x1e5d27;if(_0x2da725[_0x9e77e4(0xb5)]==='Enter')sendMessage();};
