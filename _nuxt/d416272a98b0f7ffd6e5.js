(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{176:function(e,t,n){var content=n(182);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("4ea163a0",content,!0,{sourceMap:!1})},177:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"b",function(){return m}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return h});var r=n(178),o=n(179),c=n(180);function l(){return o}function m(e){return o.find(t=>t.$slug===e)}function d(e){return r.find(t=>t.$slug===e)}function h(){return c}},178:function(e){e.exports=[{$html:"<h1>C'est quoi Popcorn 🍿 ?</h1>\n<p><em>Popcorn</em> est une plateforme qui vous permet de trouver un·e développeur·e freelance Rennes <strong>avec (vraiment) 0% de commission</strong> pour tout le monde et sans intermédiaire.</p>\n<p>Vous entrez directement en contact avec les freelances de votre choix : <em>Popcorn</em> n'intervient pas dans les échanges qui suivent entre vous et les freelances.</p>\n<h2>Pourquoi c'est gratuit ?</h2>\n<p>Puisque que nous sommes développeurs, nous développons et maintenons nous-même cette plateforme (qui est <a href=\"https://github.com/popcorn-rennes/popcorn-rennes\">opensource</a>). La valeur ajoutée pour nous, ce sont les projets trouvés par le biais du site et le fait de pouvoir entrer en contact avec vous sans commission ni intermédiaire.</p>\n<p>Par ailleurs, puisque <em>Popcorn</em> vous permet de contacter les freelances directement et n'intervient pas dans les échanges qui suivent, il n'y a pas de travail ni de frais liés à la mise en relation.</p>\n<p>Enfin, Popcorn n'est pas une entreprise mais une <a href=\"https://opencollective.com/popcorn\">association</a>.</p>\n",$slug:"a-propos",$id:"a-propos.md"},{$html:'<h1>S\'inscrire sur Popcorn</h1>\n<p>Popcorn est une plateforme open source et sans commission conçue <em>par</em> et <em>pour</em> les développeur·e·s freelances de Rennes. L\'inscription se fait en faisant une <em>pull request</em> sur le dépôt <em>Git</em> du code source de <em>Popcorn</em> en suivant les instructions du README.</p>\n<div class="has-text-centered section">\n<a class="button is-primary" href="https://github.com/popcorn-rennes/popcorn-rennes#cr%C3%A9er-son-profil"><img style="width:20px;margin-right:5px" src="/icons/github.svg"> S\'INSCRIRE </a>\n</div>\n',$slug:"inscription",$id:"inscription.md"}]},179:function(e){e.exports=[{titre:"Joyeux développeur web/mobile",sous_titre:"couteau-suisse depuis 8 ans",prenom:"Gurvan",nom:"Henry",mail:"gurvan@hojopa.com",telephone:null,photo:"/public/images/gurvan-henry.jpg",domaines_metiers:["applications web","applications mobiles","accompagnement"],technologies:["la-techno-qui-va-bien 🧐"],$html:"<p>Développeur passionné depuis 8 ans (salarié en startup) puis indépendant, j'exploite avec joie ma nature curieuse et aidante pour <strong>travailler dans la confiance</strong> sur toute sorte de projet.</p>\n<p>Mon <strong>cap de travail est orienté par l'objectif de l'équipe</strong>. C'est ainsi que les stratégies de travail (agile, mvp ...) et les choix techniques se dessinent.</p>\n<p>Cette motivation me permet de m'adapter sur tous les langages (ou presque 🤭).</p>\n<p>Je suis : <strong>développeur couteau-suisse touche à tout</strong> qui demande souvent <em>&quot;pourquoi ?&quot;</em><br>\nJe ne suis pas : expert d'un langage et incollable sur son histoire et ses fines subtilités techniques.</p>\n<p>Envie de discuter d'un projet, d'un choix technique engageant ?<br>\n<a href=\"mailto:gurvan@hojopa.com\">gurvan@hojopa.com</a></p>\n<p><a href=\"http://www.gurvanhenry.com\">http://www.gurvanhenry.com</a></p>\n",$slug:"gurvan-henry",$id:"gurvan-henry.md",$search_keywords:["applications web","applications mobiles","accompagnement","la-techno-qui-va-bien 🧐","Joyeux développeur web/mobile"]}]},180:function(e){e.exports=[{name:"Morbihan",url:"https://popcorn-morbihan.github.io",image:"/images/morbihan.png",$html:"",$slug:"morbihan",$id:"morbihan.md"},{name:"Nantes",url:"https://popcorn-nantes.github.io",image:"/images/nantes.jpg",$html:"",$slug:"nantes",$id:"nantes.md"},{name:"Quimper",url:"https://popcorn-quimper.github.io",image:"/images/quimper.jpg",$html:"",$slug:"quimper",$id:"quimper.md"},{name:"Rennes",url:"https://popcorn-rennes.github.io",image:"/images/rennes.jpg",$html:"",$slug:"rennes",$id:"rennes.md"}]},181:function(e,t,n){"use strict";var r=n(176);n.n(r).a},182:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,".card-image[data-v-7193c8f4]{position:relative}.photo-container[data-v-7193c8f4]{height:300px}.photo[data-v-7193c8f4]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.legend[data-v-7193c8f4]{position:absolute;bottom:0;width:100%}.legend-title[data-v-7193c8f4]{text-align:center;color:#fff;padding:.8rem;background-color:rgba(0,0,0,.6)}.legend-title .title[data-v-7193c8f4]{color:#fff}",""])},183:function(e,t,n){"use strict";var r={props:{imageUrl:{type:String,required:!0},legend:{type:String,default:null}}},o=(n(181),n(9)),component=Object(o.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"photo-card card-image"},[t("div",{staticClass:"photo-container"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imageUrl,expression:"imageUrl"}],staticClass:"photo",attrs:{alt:""}})]),this._v(" "),this.$slots.default?t("div",{staticClass:"legend"},[t("p",{staticClass:"legend-title"},[this._t("default")],2)]):this._e()])},[],!1,null,"7193c8f4",null);t.a=component.exports},184:function(e,t,n){var content=n(189);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("66378ac3",content,!0,{sourceMap:!1})},185:function(e,t,n){"use strict";var r={props:{itemsByRow:{type:String,default:"4"},itemKey:{type:Function,default:function(e,t){return t}},items:{type:Array,default:[]}},computed:{columnClasses:function(){return"column is-"+12/this.itemsByRow},columns:function(){var e=0,t={};for(var n in this.items)n%this.itemsByRow==0&&(t[++e]=[]),t[e].push(this.items[n]);return t}}},o=n(9),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.columns,function(t,r){return n("div",{key:r,staticClass:"columns"},e._l(t,function(t,r){return n("div",{key:e.itemKey(t,r),class:e.columnClasses},[e._t("default",null,{item:t,index:r})],2)}),0)}),0)},[],!1,null,null,null);t.a=component.exports},186:function(e,t,n){"use strict";var r={props:{tags:{type:Array,required:!0}}},o=n(9),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.tags,function(t){return n("span",{key:t,staticClass:"tag is-light",staticStyle:{"margin-right":"5px"}},[e._v(e._s(t))])}),0)},[],!1,null,null,null);t.a=component.exports},187:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},188:function(e,t,n){"use strict";var r=n(184);n.n(r).a},189:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,"input[data-v-4ab08238]{max-width:400px}",""])},190:function(e,t,n){"use strict";n.r(t);n(26);var r=n(187),o=n(186),c=n(183),l={components:{Tags:o.a,PhotoCard:c.a},props:{person:{type:Object,required:!0}},methods:{detail:function(){this.$router.push({path:"/person/".concat(this.person.$slug),query:{search:this.$store.getters.currentSearch}})}}},m=n(9),d={components:{PersonCard:Object(m.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"person",attrs:{id:"person-"+e.person.$slug}},[n("div",{staticClass:"card",on:{click:function(t){return e.detail()}}},[n("PhotoCard",{attrs:{imageUrl:e.person.photo}},[n("span",{staticClass:"title is-4"},[e._v(e._s(e.person.prenom)+" "+e._s(e.person.nom))])]),e._v(" "),n("div",{staticClass:"card-content"},[n("h2",{staticClass:"has-text-centered",staticStyle:{"font-size":"20px"}},[e._v(e._s(e.person.titre))]),e._v(" "),n("h3",{directives:[{name:"show",rawName:"v-show",value:e.person.sous_titre,expression:"person.sous_titre"}],staticClass:"has-text-centered",staticStyle:{"font-size":"15px","font-style":"italic"}},[e._v(e._s(e.person.sous_titre))]),e._v(" "),n("div",{staticClass:"has-text-centered",staticStyle:{"padding-top":"1em"}},[n("Tags",{staticClass:"domaines-metiers",attrs:{tags:e.person.domaines_metiers}})],1),e._v(" "),n("div",{staticClass:"has-text-centered",staticStyle:{"padding-top":"1em"}},[n("Tags",{staticClass:"technologies",attrs:{tags:e.person.technologies}})],1),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"has-text-centered"},[n("br"),e._v(" "),n("nuxt-link",{staticClass:"button is-primary",attrs:{to:{path:"/person/"+e.person.$slug,query:{search:e.$store.getters.currentSearch}}}},[e._v("Voir le profil")])],1)])])],1)])},[],!1,null,null,null).exports,BulmaGrid:n(185).a},props:{persons:{type:Array,required:!0}}},h=Object(m.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("BulmaGrid",{attrs:{items:this.persons,itemsByRow:"3",itemKey:function(e){return e.$slug}},scopedSlots:this._u([{key:"default",fn:function(e){var n=e.item;return[t("PersonCard",{attrs:{person:n}})]}}])})},[],!1,null,null,null).exports,v={props:{value:{type:String,required:!0}}},f=(n(188),Object(m.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field has-text-centered"},[n("div",{staticClass:"control has-text-centered"},[n("label",{staticClass:"label",attrs:{for:"search"}},[e._v("Cherchez par domaine (site web, application mobile, boutique...) ou technologie (React, WordPress, Java, PHP ... )")]),e._v(" "),n("input",{staticClass:"input is-large",attrs:{id:"search",type:"text"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])])},[],!1,null,"4ab08238",null).exports),content=n(177),y={scrollToTop:!1,components:{Persons:h,PersonsSearchForm:f},data:function(){return{persons:Object(r.a)(Object(content.c)())}},computed:{title:function(){return"Popcorn : trouvez un·e développeur·e freelance à Rennes"},subtitle:function(){return"La plateforme avec (vraiment) 0% de commission"}},methods:{onInput:function(e){this.$store.commit("setCurrentSearch",e),this.persons=this.filterPersons(e)},filterPersons:function(text){var e=Object(content.c)().filter(function(e){var t=!1;e._exactMatch=!1;var n=text.toLowerCase().trim();return e.$search_keywords.forEach(function(r){(r=r.toLowerCase()).indexOf(n)>-1&&(t=!0,n.length===r.length&&(e._exactMatch=!0))}),t});return e=e.sort(function(a,b){return b._exactMatch-a._exactMatch})}},created:function(){this.$store.state.currentSearch.trim()&&(this.persons=this.filterPersons(this.$store.state.currentSearch))}},_=Object(m.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container has-text-centered",staticStyle:{"margin-top":"2rem"}},[n("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("h2",{staticClass:"subtitle"},[n("em",[e._v(e._s(e.subtitle))])])]),e._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"section"},[n("div",{staticStyle:{"padding-bottom":"3em"}},[n("PersonsSearchForm",{attrs:{value:e.$store.state.currentSearch},on:{input:e.onInput}})],1),e._v(" "),n("Persons",{attrs:{persons:e.persons}})],1)])])},[],!1,null,null,null);t.default=_.exports}}]);