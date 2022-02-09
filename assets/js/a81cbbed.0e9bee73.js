"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2545],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),l=function(e){var a=o.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=l(e.components);return o.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(m,".").concat(d)]||u[d]||c[d]||n;return t?o.createElement(g,i(i({ref:a},p),{},{components:t})):o.createElement(g,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,a,t){var o=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return c}});var o=t(7294),r=t(9443);var n=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),s="tabItem_1uMI",m="tabItemActive_2DSg";var l=37,p=39;var c=function(e){var a=e.lazy,t=e.block,r=e.defaultValue,c=e.values,u=e.groupId,d=e.className,g=n(),v=g.tabGroupChoices,k=g.setTabGroupChoices,N=(0,o.useState)(r),h=N[0],f=N[1],b=o.Children.toArray(e.children),w=[];if(null!=u){var x=v[u];null!=x&&x!==h&&c.some((function(e){return e.value===x}))&&f(x)}var y=function(e){var a=e.currentTarget,t=w.indexOf(a),o=c[t].value;f(o),null!=u&&(k(u,o),setTimeout((function(){var e,t,o,r,n,i,s,l;(e=a.getBoundingClientRect(),t=e.top,o=e.left,r=e.bottom,n=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&n<=l&&r<=s&&o>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(m),setTimeout((function(){return a.classList.remove(m)}),2e3))}),150))},F=function(e){var a,t;switch(e.keyCode){case p:var o=w.indexOf(e.target)+1;t=w[o]||w[0];break;case l:var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},d)},c.map((function(e){var a=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":h===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:F,onFocus:y,onClick:y},t)}))),a?(0,o.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},9443:function(e,a,t){var o=(0,t(7294).createContext)(void 0);a.Z=o},4692:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var o=t(7462),r=t(3366),n=(t(7294),t(3905)),i=t(5064),s=t(8215),m=["components"],l={id:"custos",title:"Custos e cria\xe7\xe3o de conta",sidebar_label:"Custos e cria\xe7\xe3o de conta"},p=void 0,c={unversionedId:"novatos/custos",id:"novatos/custos",isDocsHomePage:!1,title:"Custos e cria\xe7\xe3o de conta",description:"Guia dos Novatos",source:"@site/docs/novatos/custos.mdx",sourceDirName:"novatos",slug:"/novatos/custos",permalink:"/docs/novatos/custos",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/novatos/custos.mdx",version:"current",frontMatter:{id:"custos",title:"Custos e cria\xe7\xe3o de conta",sidebar_label:"Custos e cria\xe7\xe3o de conta"},sidebar:"novatos",previous:{title:"Introdu\xe7\xe3o do guia dos novatos",permalink:"/docs/novatos/introducaoNv"},next:{title:"D\xedcion\xe1rio de termos e \xedcones",permalink:"/docs/novatos/termosIcones"}},u=[{value:"Quanto custa jogar Final Fantasy XIV?",id:"quanto-custa-jogar-final-fantasy-xiv",children:[]},{value:"O que \xe9 a conta Trial?",id:"o-que-\xe9-a-conta-trial",children:[]},{value:"Como crio minha conta?",id:"como-crio-minha-conta",children:[]},{value:"Como ativo o jogo ap\xf3s comprar?",id:"como-ativo-o-jogo-ap\xf3s-comprar",children:[]},{value:"Como pago a mensalidade?",id:"como-pago-a-mensalidade",children:[]}],d={toc:u};function g(e){var a=e.components,t=(0,r.Z)(e,m);return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/KTjReJB.png",alt:"Guia dos Novatos"})),(0,n.kt)("h2",{id:"quanto-custa-jogar-final-fantasy-xiv"},"Quanto custa jogar Final Fantasy XIV?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}),"Primeiramente voc\xea precisa ter em mente que \xe9 necess\xe1rio comprar o jogo base e a ultima expans\xe3o, mas ao mesmo tempo trabalha com o sitema de assinatura mensal, voc\xea pode verificar os valores a seguir:"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pre\xe7os")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/ee/Player35_Icon.png",alt:"Gil"}),'Ao comprar o jogo voc\xea autom\xe1ticamente recebe 30 dias de assinatura "gratuitos". ',(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/ee/Player35_Icon.png",alt:"Gil"})),(0,n.kt)(i.Z,{defaultValue:"js",values:[{label:"Computador",value:"pc"},{label:"Playstation 4",value:"ps4"},{label:"Mensalidade",value:"m"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"pc",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Voc\xea pode optar por comprar o jogo base separado:")),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/woO0JVL.png",alt:"starter"})),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Ou comprar a ultima expans\xe3o e o jogo base de uma vez:")),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/L4243NZ.png",alt:"complete"}))),(0,n.kt)(s.Z,{value:"ps4",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Voc\xea pode optar por comprar o jogo base separado:")),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/xZwqz9T.png",alt:"starter"}),(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Ou comprar a ultima expans\xe3o e o jogo base de uma vez:")),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/X6jTWnP.png",alt:"complete"}))),(0,n.kt)(s.Z,{value:"m",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},'O mais recomendado \xe9 a assinatura "Entry", pois voc\xea pode ter tudo em apenas um personagem e dificilmente vai precisar de mais um, mas isso fica a seu crit\xe9rio.'),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/EPN5aQ1.png",alt:"mensalidade"})))))),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Promo\xe7\xf5es e conta trial")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Uma dica muito importante \xe9 que o Final Fantasy XIV entra em promo\xe7\xe3o com uma frequ\xeancia absurda, ent\xe3o vale a pena criar uma conta de teste (trial), assim voc\xea experimenta o jogo sem muitas limita\xe7\xf5es e consegue esperar um pre\xe7o bacana aparecer. A seguir lhe mostraremos como criar sua conta trial e eventualmente ativar o jogo quando comprado.")))),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Aten\xe7\xe3o ao pagamento")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Independente se voc\xea vai jogar no ps4 ou no pc, sua assinatura ser\xe1 paga via steam, dessa forma o valor n\xe3o faz uma convers\xe3o direta do dolar, assim ficando mais barato. (tudo ser\xe1 devidamente explicado nos t\xf3picos a baixo).")))),(0,n.kt)("h2",{id:"o-que-\xe9-a-conta-trial"},"O que \xe9 a conta Trial?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," Com sua conta trial voc\xea ter\xe1 acesso inteiramente gratuito e com tempo indeterminado a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Jogo base FINAL FANTASY\xae XIV: A Realm Reborn"),(0,n.kt)("li",{parentName:"ul"},"Primeira expans\xe3o do jogo FINAL FANTASY\xae XIV: Heavensward"),(0,n.kt)("li",{parentName:"ul"},"Todos os jobs(classes) dispon\xedveis at\xe9 o n\xedvel 70 "),(0,n.kt)("li",{parentName:"ul"},"Todas as profiss\xf5es dispon\xedveis at\xe9 o n\xedvel 70, seja de coleta quanto de cria\xe7\xe3o de itens"),(0,n.kt)("li",{parentName:"ul"},"Todo e qualquer conte\xfado at\xe9 o level 70"),(0,n.kt)("li",{parentName:"ul"},"(Colocar tempo de jogo total do free trial)")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," Limita\xe7\xf5es da conta trial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Voc\xea s\xf3 poder\xe1 acumular no m\xe1ximo 300k de Gil (moeda do jogo)"),(0,n.kt)("li",{parentName:"ul"},"as op\xe7\xf5es de bate-papo do jogo para \u201cgritar\u201d, \u201cgritar\u201d ou \u201cdizer\u201d n\xe3o est\xe3o dispon\xedveis. (Voc\xea pode usar o bate-papo em grupo durante o Duty Finders e o comando \u201cdizer\u201d no bate-papo geral)."),(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode acessar o market board (Mercado da comunidade)"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode contratar retainers (personagens que v\xe3o carregar seus itens, como se fosse um ba\xfa)"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode enviar cartas"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o pode usar o sussurro (mensagem privada)"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o \xe9 possivel criar ou entrar em uma guildas"),(0,n.kt)("li",{parentName:"ul"},"\xc9 possivel entrar no localizador de grupos, mas n\xe3o criar grupos pr\xf3prios"),(0,n.kt)("li",{parentName:"ul"},"N\xe3o \xe9 possivel criar ou entrar em uma equipe de PvP ou participar do The Feast (ranqueada).")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"N\xe3o h\xe1 perda de progresso ao comprar o jogo")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Ap\xf3s comprar o jogo todo o seu progresso da conta trial ser\xe1 migrado para sua conta completa.")))),(0,n.kt)("h2",{id:"como-crio-minha-conta"},"Como crio minha conta?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," Primeiramente voc\xea deve procurar na steam por Final Fantasy XIV Online Free Trial como na imagem a baixo:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/fItPOo5.png",alt:"Conta_Trial"})),(0,n.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Aten\xe7\xe3o ao pagamento")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"\xc9 muito importante que a conta seja criada seguindo exatamente o processo a seguir, pois caso voc\xea crie a conta por fora do jogo estar\xe1 sujeito a pagar a mensalidade jogo em dolar, o que far\xe1 ficar MUITO mais cara .")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ap\xf3s a instala\xe7\xe3o voc\xea pode abrir o jogo e basta seguir esses passos:"),(0,n.kt)("li",{parentName:"ul"},'Clique em "Next"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/S1h1iQL.png",alt:"Cadastro_FFXIV_1"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A seguir voc\xea clica em "I do not possess a Square Enix account"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/InlJQ1Q.png",alt:"Cadastro_FFXIV_2"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ap\xf3s o passo anterior voc\xea pode clicar em "Country/region of registration" e selecionar Brazil, ou o pa\xeds que preferir')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/aIxCv9k.png",alt:"Cadastro_FFXIV_3"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Preencha os campos com suas informa\xe7\xf5es")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/jqPrRbr.png",alt:"Cadastro_FFXIV_4"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Depois de preencher com seus dados, confira seu email l\xe1 voc\xea encontrar\xe1 um c\xf3digo de confirma\xe7\xe3o, a\xed \xe9 s\xf3 colocar nesse campos")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Clique em "Next"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Zip6MI3.png",alt:"Cadastro_FFXIV_6"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Nesse momento voc\xea pode apenas marcar "Accept the User Agreement", deixe o "Registration Code" em branco e clique em "Next"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/kGquS6e.png",alt:"Cadastro_FFXIV_7"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ap\xf3s clicar em "Next", voc\xea ir\xe1 se deparar com a mensagem "The entered code is invalid", a\xed basta fechar o jogo e abrir de novo')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/pk3UqdQ.png",alt:"Cadastro_FFXIV_8"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Dessa vez ao abrir o jogo e clicar em "Next", voc\xea ir\xe1 clicar em "I currently possess a Square Enix Account". ')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/sM8ovSV.png",alt:"Cadastro_FFXIV_9"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Por fim basta preencher com seu cadastro, ",(0,n.kt)("strong",{parentName:"li"},'ignorar o campo "One-Time Password"'),' e clicar em "Log In"')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/NAcY8U5.png",alt:"Cadastro_FFXIV_10"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Agora voc\xea finalmente pode acessar seu jogo em sua conta trial, caso voc\xea queira comprar o jogo e ativar veja o t\xf3pico a frente")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Cadastro no PS4")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Para fazer o cadastro no PS4 basta seguir os mesmos passos, mas baixando jogo pela loja da psn.")),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Ressaltando que apesar de registrar o jogo na PSN, voc\xea deve comprar pela loja da Steam, assim voc\xea evita pagar a mensalidade em dolar.")))),(0,n.kt)("h2",{id:"como-ativo-o-jogo-ap\xf3s-comprar"},"Como ativo o jogo ap\xf3s comprar?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," Ap\xf3s efetuar a compra do jogo na steam abra ele em sua biblioteca e siga os passos a seguir:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clique no icone que a seta vermelha est\xe1 apontando")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/hWVqYh1.png",alt:"Ativar_FFXIV_1"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gerenciar e depois c\xf3digos de produto ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/emtBK5i.png",alt:"Ativar_FFXIV_2"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Agora voc\xea ir\xe1 ver as Keys respectivas ao jogo base e ou as expans\xf5es que voc\xea comprou (por isso pode n\xe3o estar exatamente igual o da imagem), mas agora voc\xea deve copiar o c\xf3digo de qual deseja ativar.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Com seu c\xf3digo em m\xe3os acesse o site oficial do Final Fantasy XIV Mogstation ",(0,n.kt)("a",{parentName:"li",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwif6N2wscHzAhXCFbkGHSBvCMAQFnoECA4QAQ&url=https%3A%2F%2Fsecure.square-enix.com%2Foauth%2Foa%2Foauthlogin%253Fresponse_type%253Dcode%2526redirect_uri%253Dhttps%25253A%25252F%25252Fsecure.square-enix.com%25252Faccount%25252Fapp%25252Fsvc%25252Ftop%25253Frequest%25253Dmogstation%2526client_id%253Dffxiv_mog%2526alar%253D1%2526lang%253Den-us%2526facflg%253D1&usg=AOvVaw2FvNYHJP-8soscEt3SKW9E"},"clicando aqui")," e preencha o login com seus dados:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/OG46uuG.png",alt:"Login na Mogstation"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'A seguir voc\xea deve clicar em "Enter Expansion Registration Code":')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/kGeIM6e.png",alt:"Registrar c\xf3digo"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Agora basta inserir o seu c\xf3digo, confirmar e seu jogo j\xe1 est\xe1 ativado e pronto para jogar.")),(0,n.kt)("h2",{id:"como-pago-a-mensalidade"},"Como pago a mensalidade?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," Acesse o site oficial do Final Fantasy XIV Mogstation ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwif6N2wscHzAhXCFbkGHSBvCMAQFnoECA4QAQ&url=https%3A%2F%2Fsecure.square-enix.com%2Foauth%2Foa%2Foauthlogin%253Fresponse_type%253Dcode%2526redirect_uri%253Dhttps%25253A%25252F%25252Fsecure.square-enix.com%25252Faccount%25252Fapp%25252Fsvc%25252Ftop%25253Frequest%25253Dmogstation%2526client_id%253Dffxiv_mog%2526alar%253D1%2526lang%253Den-us%2526facflg%253D1&usg=AOvVaw2FvNYHJP-8soscEt3SKW9E"},"clicando aqui")," e preencha o login com seus dados"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ap\xf3s logar na sua conta voc\xea ser\xe1 redirecionado a tela vista a seguir e basta clicar em steam Payment:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/pSq2nS8.png",alt:"Pagando a mensalidade"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ap\xf3s ele te redirecionar voc\xea ver\xe1 essa p\xe1gina, escolha o tipo de assinatura, marque quantos dias vai querer, e muito importante ",(0,n.kt)("strong",{parentName:"li"},'Clique em "Steam Account (Auto Renewal)"'),", pois com essa op\xe7\xe3o voc\xea pagar\xe1 menos."),(0,n.kt)("li",{parentName:"ul"},"N\xe3o se preocupe ",(0,n.kt)("strong",{parentName:"li"},"Isso n\xe3o significa que ele debitar\xe1 autom\xe1tico, pois consultar\xe1 sua steam antes."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/VmhMgqu.png",alt:"Finalizando pagamento da mensalidade"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Clique em "Next":')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/EGKt3qp.png",alt:"Next"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Aceite os termos e clique novamente em "Next":')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/wbh7qiN.png",alt:"Termos e condi\xe7\xf5es"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Por ultimo voc\xea ser\xe1 redirecionado para a o login da steam, pode logar tranquilamente e autorizar o ultimo processo:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/vcnYoMe.png",alt:"Autorizando Steam"})),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pre\xe7os aparencendo")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},'No seu caso nos campos "subtotal" e "total", estar\xe1 listado o valor, a conta usada para tirar esses prints estava com mensalidade ativa, por isso tem essa diferen\xe7a.'))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Agora \xe9 s\xf3 ter uma boa jogatina.")))}g.isMDXComponent=!0},6010:function(e,a,t){function o(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=o(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=o(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);