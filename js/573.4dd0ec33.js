"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[573],{2417:(a,e,t)=>{t.d(e,{FP:()=>d,I_:()=>i,LE:()=>o,Pi:()=>w,R7:()=>b,RR:()=>C,TT:()=>m,Zg:()=>n,bl:()=>y,d8:()=>h,ej:()=>g,gZ:()=>r,gn:()=>u,hc:()=>f,kY:()=>v,mb:()=>c,ov:()=>p,wX:()=>_});const l=!1,s="NGdoLbyd_330",r="service_1z8boq8",i="template_uc9j4dn",n="z6CsuBOLcuYCsxNiZ",o="Auf geht's SCF",d="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",u="https://planthegame.ch",m="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",g=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),r=t.split(";");for(let l=0;l<r.length;l++){let a=r[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:void 0},h=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},v=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},p=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},b=function(a){return"statics/images/"+a+"/Logo.png"},_=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},C=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},w=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},f=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Eintracht Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.svg"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.svg"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"VfL Osnabrück",value:"VfL_Osnabrück",image:"statics/teams/VfL_Osnabrück.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],y=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},573:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Y});var l=t(9835),s=t(6970);const r={class:"q-pa-md",style:{"max-width":"500px"}},i={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},n=["src"],o=["src"],d={class:"q-pa-md q-gutter-sm"},c=(0,l._)("div",{class:"text-h6"},"Karte erfassen",-1),u=(0,l._)("div",{class:"text-h6"},"Karte ändern",-1),m=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function g(a,e,t,g,h,v){const p=(0,l.up)("q-toolbar-title"),b=(0,l.up)("q-btn"),_=(0,l.up)("q-toolbar"),C=(0,l.up)("q-avatar"),w=(0,l.up)("q-item-section"),f=(0,l.up)("q-item-label"),y=(0,l.up)("q-item"),H=(0,l.up)("q-list"),M=(0,l.up)("q-card-section"),W=(0,l.up)("q-input"),k=(0,l.up)("q-toggle"),T=(0,l.up)("q-separator"),S=(0,l.up)("q-card-actions"),x=(0,l.up)("q-card"),I=(0,l.up)("q-dialog"),A=(0,l.up)("q-img"),B=(0,l.up)("q-page"),O=(0,l.Q2)("ripple"),V=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(B,null,{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(_,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Wer hat meine Karte ("+(0,s.zw)(h.whereIsMyCardObject.length)+")",1)])),_:1}),"true"===h.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(b,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>g.addWhereIsMyCard=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.whereIsMyCardObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(H,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(y,{clickable:"",onClick:e=>v.onWhereIsMyCardClick(a.cardHolderId,a.cardHolder,a.discounted,a.whoHasTheCard)},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{avatar:""},{default:(0,l.w5)((()=>[""===a.cardHolderAvatar?((0,l.wg)(),(0,l.j4)(C,{key:0,size:"50px",color:"lime-10","text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.cardHolder.substring(0,1)),1)])),_:2},1024)):(0,l.kq)("",!0),""!==a.cardHolderAvatar?((0,l.wg)(),(0,l.j4)(C,{key:1,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:h.getAvatar(g.varAdminCode,a.cardHolderAvatar,a.cardHolderAvatarIsCustomized)},null,8,n)])),_:2},1024)):(0,l.kq)("",!0)])),_:2},1024),(0,l.Wm)(w,{avatar:""},{default:(0,l.w5)((()=>[""===a.whoHasTheCardAvatar?((0,l.wg)(),(0,l.j4)(C,{key:0,size:"50px",color:"green-10","text-color":"white"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.whoHasTheCard.substring(0,1)),1)])),_:2},1024)):(0,l.kq)("",!0),""!==a.whoHasTheCardAvatar?((0,l.wg)(),(0,l.j4)(C,{key:1,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:h.getAvatar(g.varAdminCode,a.whoHasTheCardAvatar,a.whoHasTheCardAvatarIsCustomized)},null,8,o)])),_:2},1024)):(0,l.kq)("",!0)])),_:2},1024),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Inhaber: "+(0,s.zw)(a.cardHolder),1)])),_:2},1024),a.discounted?((0,l.wg)(),(0,l.j4)(f,{key:0,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Kind: Ja")])),_:1})):(0,l.kq)("",!0),a.discounted?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(f,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Kind: Nein")])),_:1})),(0,l.Wm)(f,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Wer hat die Karte: "+(0,s.zw)(a.whoHasTheCard),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[O]])])),_:2},1024)),[[O]]))),128))]),(0,l._)("div",d,[(0,l.Wm)(I,{modelValue:g.addWhereIsMyCard,"onUpdate:modelValue":e[5]||(e[5]=a=>g.addWhereIsMyCard=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(M,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{filled:"",dense:"",modelValue:g.txtCardHolderNew,"onUpdate:modelValue":e[1]||(e[1]=a=>g.txtCardHolderNew=a),autofocus:"",label:"Inhaber *"},null,8,["modelValue"]),(0,l.Wm)(k,{modelValue:g.tglDiscountedNew,"onUpdate:modelValue":e[2]||(e[2]=a=>g.tglDiscountedNew=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"]),(0,l.Wm)(W,{filled:"",dense:"",modelValue:g.txtWhoHasTheCardNew,"onUpdate:modelValue":e[3]||(e[3]=a=>g.txtWhoHasTheCardNew=a),label:"Wer hat die Karte *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(T),(0,l.Wm)(S,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Abbrechen"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(b,{icon:"save",label:"Speichern",onClick:e[4]||(e[4]=a=>v.addWhereIsMyCardSave(g.txtCardHolderNew,g.tglDiscountedNew,g.txtWhoHasTheCardNew)),disable:""===g.txtCardHolderNew||""===g.txtWhoHasTheCardNew},null,8,["disable"]),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(I,{modelValue:g.editWhereIsMyCard,"onUpdate:modelValue":e[11]||(e[11]=a=>g.editWhereIsMyCard=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(M,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{filled:"",dense:"",modelValue:g.txtCardHolder,"onUpdate:modelValue":e[6]||(e[6]=a=>g.txtCardHolder=a),label:"Inhaber *"},null,8,["modelValue"]),(0,l.Wm)(k,{modelValue:g.tglDiscounted,"onUpdate:modelValue":e[7]||(e[7]=a=>g.tglDiscounted=a),color:"red",label:"Kind","left-label":""},null,8,["modelValue"]),(0,l.Wm)(W,{filled:"",dense:"",modelValue:g.txtWhoHasTheCard,"onUpdate:modelValue":e[8]||(e[8]=a=>g.txtWhoHasTheCard=a),autofocus:"",label:"Wer hat die Karte *"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(T),(0,l.Wm)(S,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[h.getCookie("isAdministrator")?((0,l.wg)(),(0,l.j4)(b,{key:0,icon:"delete",color:"primary",onClick:e[9]||(e[9]=a=>g.delWhereIsMyCard=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Abbrechen"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(b,{icon:"save",label:"Speichern",onClick:e[10]||(e[10]=a=>v.editWhereIsMyCardSave(g.txtCardHolderId,g.txtCardHolder,g.txtCardHolderOld,g.tglDiscounted,g.txtWhoHasTheCard)),disable:""===g.txtCardHolder||""===g.txtWhoHasTheCard},null,8,["disable"]),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(I,{modelValue:g.delWhereIsMyCard,"onUpdate:modelValue":e[13]||(e[13]=a=>g.delWhereIsMyCard=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{icon:"delete",color:"primary","text-color":"white"}),m])),_:1}),(0,l.Wm)(S,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Nein",color:"primary"},null,512),[[V]]),(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Ja",color:"primary",onClick:e[12]||(e[12]=a=>v.deleteWhereIsMyCard(g.txtCardHolderId))},null,512),[[V]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(A,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(6822),t(9665),t(6727);var h=t(9302),v=t(2417),p=t(499),b=t(4308);const _=(0,p.iH)(""),C=(0,p.iH)(""),w=(0,p.iH)(""),f=(0,p.iH)(""),y=(0,p.iH)(""),H=(0,p.iH)("");let M,W,k,T;const S={name:"ListWhoHasTheCard",setup(){const a=(0,h.Z)();return{varAdminCode:(0,p.iH)(H),txtCardHolderId:(0,p.iH)(_),txtCardHolder:(0,p.iH)(C),txtCardHolderOld:(0,p.iH)(w),tglDiscounted:(0,p.iH)(f),txtWhoHasTheCard:(0,p.iH)(y),txtCardHolderNew:(0,p.iH)(""),tglDiscountedNew:(0,p.iH)(!1),txtWhoHasTheCardNew:(0,p.iH)(""),onCardHolderCreated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich erfasst!"})},onCardHolderUpdated(){a.notify({type:"positive",message:"Karteninhaber wurde erfolgreich aktualisiert!"})},onCardHolderDeleted(){a.notify({message:"Karteninhaber wurde erfolgreich gelöscht!",color:"orange"})},onCardHolderAlreadyExists(){a.notify({type:"negative",message:"Dieser Karteninhaber besteht bereits!"})},addWhereIsMyCard:(0,p.iH)(!1),editWhereIsMyCard:(0,p.iH)(!1),delWhereIsMyCard:(0,p.iH)(!1)}},data(){return{getCookie:v.ej,getAdminCode:v.kY,getAvatar:v.wX,URLMatchManagementAPI:v.gn,whereIsMyCardObject:[{cardHolderId:"",cardHolder:"",cardHolderAvatar:"",cardHolderAvatarIsCustomized:"",discounted:"",whoHasTheCard:"",whoHasTheCardAvatar:"",whoHasTheCardAvatarIsCustomized:""}],memberObject:[{member:"",avatar:"",customized:""}]}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenantId().then((()=>{this.getTableMember().then((()=>{this.getTableWhereIsMyCard()}))}))}))},methods:{setVariables(){return H.value=(0,v.kY)((0,v.ej)("applicationCode")),W=v.gn+"/Tenant",T=v.gn+"/CardHolder",k=v.gn+"/Member",this.whereIsMyCardObject=[],Promise.resolve()},getTenantId(){return new Promise(((a,e)=>{this.$axios.get(`${W}/code/${H.value}`).then((t=>{200===t.status?(M=t.data.id,a()):(console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code")))})).catch((a=>{console.log(a),e(a)}))}))},getTableMember(){return new Promise(((a,e)=>{this.memberObject=[],this.$axios.get(`${k}/${M}`).then((t=>{if(200===t.status){for(let a=0;a<t.data.length;a++)this.setMemberObject(t.data[a].name,t.data[a].avatar,t.data[a].isCustomized);a()}else console.log("Unexpected status code:",t.status),e(new Error("Unexpected status code"))})).catch((a=>{console.log(a),e(a)}))}))},setMemberObject(a,e,t){this.memberObject.push({member:a,avatar:e,customized:t})},getTableWhereIsMyCard(){this.whereIsMyCardObject=[],this.$axios.get(`${T}/${M}`).then((a=>{if(200===a.status)for(let e=0;e<a.data.length;e++){let t=this.memberObject.find((t=>t.member===a.data[e].name))?.avatar;"undefined"===typeof t&&(t="");let l=this.memberObject.find((t=>t.member===a.data[e].name))?.customized;"undefined"===typeof l&&(l=!1);let s=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.avatar;"undefined"===typeof s&&(s="");let r=this.memberObject.find((t=>t.member===a.data[e].whoHasTheCard))?.customized;"undefined"===typeof r&&(r=!1),this.setWhereIsMyCardObject(a.data[e].id,a.data[e].name,t,l,a.data[e].isDiscounted,a.data[e].whoHasTheCard,s,r)}else console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))},setWhereIsMyCardObject(a,e,t,l,s,r,i,n){this.whereIsMyCardObject.push({cardHolderId:a,cardHolder:e,cardHolderAvatar:t,cardHolderAvatarIsCustomized:l,discounted:s,whoHasTheCard:r,whoHasTheCardAvatar:i,whoHasTheCardAvatarIsCustomized:n})},onWhereIsMyCardClick(a,e,t,l){_.value=a,C.value=e,w.value=e,f.value=t,y.value=l,this.editWhereIsMyCard=!0},addWhereIsMyCardSave(a,e,t){const l=this.whereIsMyCardObject.map((a=>a.cardHolder)),s=l.includes(a);if(s)this.onCardHolderAlreadyExists();else{const l=(0,b.Z)(),s=new Date,r={id:l,creationTime:s,lastModificationTime:null,tenantId:M,name:a,discounted:e,whoHasTheCard:t};this.$axios.post(`${T}/${M}`,r).then((a=>{201===a.status?(this.onCardHolderCreated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},editWhereIsMyCardSave(a,e,t,l,s){const r=this.whereIsMyCardObject.map((a=>a.cardHolder)),i=r.includes(e)&&e!==t;if(i)this.onCardHolderAlreadyExists();else{const t={id:a,creationTime:null,lastModificationTime:null,tenantId:M,name:e,discounted:l,whoHasTheCard:s};this.$axios.put(`${T}/${M}/${a}`,t).then((a=>{200===a.status?(this.onCardHolderUpdated(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}},deleteWhereIsMyCard(a){this.$axios.delete(`${T}/${M}/${a}`).then((a=>{200===a.status?(this.editWhereIsMyCard=!1,this.onCardHolderDeleted(),this.getTableWhereIsMyCard()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}}};var x=t(1639),I=t(9885),A=t(1663),B=t(1973),O=t(8879),V=t(3246),L=t(490),D=t(1233),K=t(1357),P=t(3115),j=t(2074),q=t(4458),U=t(3190),z=t(6611),E=t(592),Z=t(926),F=t(1821),N=t(1487),J=t(1136),Q=t(2146),$=t(9984),R=t.n($);const G=(0,x.Z)(S,[["render",g]]),Y=G;R()(S,"components",{QPage:I.Z,QToolbar:A.Z,QToolbarTitle:B.Z,QBtn:O.Z,QList:V.Z,QItem:L.Z,QItemSection:D.Z,QAvatar:K.Z,QItemLabel:P.Z,QDialog:j.Z,QCard:q.Z,QCardSection:U.Z,QInput:z.Z,QToggle:E.Z,QSeparator:Z.Z,QCardActions:F.Z,QImg:N.Z}),R()(S,"directives",{Ripple:J.Z,ClosePopup:Q.Z})}}]);