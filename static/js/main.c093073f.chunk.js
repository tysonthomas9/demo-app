(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(e,a,t){e.exports=t(516)},284:function(e,a,t){},286:function(e,a,t){},516:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(49),c=t.n(r),m=(t(284),t(164)),i=t(165),s=t(378),o=t(166),u=t(379),E=t(54),d=t(168),v=t.n(d),p=t(112),h=t.n(p),f=t(169),N=t.n(f),g=t(113),y=t.n(g),w=t(50),b=t.n(w),k=t(84),M=t.n(k),D=t(63),S=t.n(D),C=t(171),P=t.n(C),A=t(116),J=t.n(A),L=t(170),T=t.n(L),x=t(41),I=t.n(x),z=t(52),j=t.n(z),H=t(519),O=t(520),R=t(373),F=t(374),B=t(517),K=t(372),Q=t(521),W=t(376),Y=t(377),U=(t(286),[{name:"Jun 15",flightPath:75},{name:"Jun 22",flightPath:90},{name:"Jun 29",flightPath:80},{name:"Jul 06",flightPath:125},{name:"Jul 13",flightPath:100},{name:"Jul 20",flightPath:90},{name:"Jul 27",flightPath:80},{name:"Aug 3",flightPath:115}]),$=["#6b5b95","#feb236","#d64161","#ff7b25","#b5e7a0"],q=[{name:"Maveric",value:10},{name:"Intel Aero #1",value:40},{name:"Intel Aero #2",value:30},{name:"Spark",value:15},{name:"Hero",value:5}],G=function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(n)))).state={loadingData:!1,showMenu:!0},t.onClickMenu=function(){t.setState({showMenu:!t.state.showMenu})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},this.state.showMenu&&n.a.createElement(E.a,{className:"form"},n.a.createElement("div",{className:"icon"},n.a.createElement(v.a,null),n.a.createElement("div",null,"Dashboard")),n.a.createElement("div",{className:"icon"},n.a.createElement(h.a,null),n.a.createElement("div",null,"Missions")),n.a.createElement("div",{className:"icon"},n.a.createElement(y.a,null),n.a.createElement("div",null,"Assets"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"header"},n.a.createElement(b.a,null,n.a.createElement(N.a,{onClick:function(){return e.onClickMenu()}})),n.a.createElement("div",{className:"leftHeaderContainer"},n.a.createElement(S.a,null,n.a.createElement(b.a,{color:"inherit"},n.a.createElement(M.a,{badgeContent:14,color:"secondary"},n.a.createElement(T.a,null)))),n.a.createElement(S.a,null,n.a.createElement("p",null,"Demo"),n.a.createElement(b.a,{color:"inherit"},n.a.createElement(P.a,null))))),n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"head stats"},n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement(h.a,{style:{fontSize:"16px"}})," Total Missions"),n.a.createElement("div",null,"12"),n.a.createElement("p",null,"~5 from last month")),n.a.createElement("div",{className:"verticalLine"}),n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement(y.a,{style:{fontSize:"16px"}})," Total Drones"),n.a.createElement("div",null,"5"),n.a.createElement("p",null,"+40% from last month")),n.a.createElement("div",{className:"verticalLine"}),n.a.createElement("div",null,n.a.createElement("p",null,"Total Pilots"),n.a.createElement("div",null,"2"),n.a.createElement("p",null,"0% from last month")),n.a.createElement("div",{className:"verticalLine"}),n.a.createElement("div",null,n.a.createElement("p",null,"Total Flight Time"),n.a.createElement("div",null,"22 Hrs"),n.a.createElement("p",null,"+6% from last month")),n.a.createElement("div",{className:"verticalLine"}),n.a.createElement("div",null,n.a.createElement("p",null,"Average Mission Time"),n.a.createElement("div",null,"12 Min"),n.a.createElement("p",null,"-3% from last month")),n.a.createElement("div",{className:"verticalLine"}),n.a.createElement("div",null,n.a.createElement("p",null,"Mission Failure Rate"),n.a.createElement("div",null,"1%"),n.a.createElement("p",null,"+4% from last month"))),n.a.createElement(E.a,{className:"mainContainer"},n.a.createElement("div",{className:"chartHeader head"},"Flight Activities"),n.a.createElement(I.a,null),n.a.createElement("div",{className:"chart"},n.a.createElement(H.a,{width:800,height:250,data:U},n.a.createElement(O.a,{strokeDasharray:"3 3"}),n.a.createElement(R.a,{dataKey:"name"}),n.a.createElement(F.a,null),n.a.createElement(B.a,null),n.a.createElement(K.a,{type:"monotone",dataKey:"flightPath",stroke:"#8884d8",fill:"#8884d8"})))),n.a.createElement("div",{className:"column"},n.a.createElement(E.a,{className:"mainContainer duration"},n.a.createElement("p",{className:"head"},"Mission Duration"),n.a.createElement(I.a,null),n.a.createElement("div",{className:"column missionData"},n.a.createElement("div",{className:"cloumn"},n.a.createElement("p",{className:"head"},"Light tower skytop mapping"),n.a.createElement(j.a,{variant:"determinate",value:30})),n.a.createElement("div",null,n.a.createElement("p",null,"2018-07-06"),n.a.createElement("p",null,"5min 7sec"))),n.a.createElement("div",{className:"column missionData"},n.a.createElement("div",{className:"cloumn"},n.a.createElement("p",{className:"head"},"Skytop Quarry 2D mapping"),n.a.createElement(j.a,{variant:"determinate",value:50})),n.a.createElement("div",null,n.a.createElement("p",null,"2018-06-26"),n.a.createElement("p",null,"12min 7sec"))),n.a.createElement("div",{className:"column missionData"},n.a.createElement("div",{className:"cloumn"},n.a.createElement("p",{className:"head"},"Skytop Quarry 3D mapping"),n.a.createElement(j.a,{variant:"determinate",value:20})),n.a.createElement("div",null,n.a.createElement("p",null,"2018-06-15"),n.a.createElement("p",null,"25min 5sec")))),n.a.createElement(E.a,{className:"mainContainer duration"},n.a.createElement("p",{className:"head"},"Drone Duration"),n.a.createElement(I.a,null),n.a.createElement("div",{className:"column droneContent"},n.a.createElement("div",null,n.a.createElement("p",{className:"head"},"Top 5"),n.a.createElement(Q.a,{width:200,height:200},n.a.createElement(W.a,{data:q,innerRadius:40,outerRadius:80,fill:"#82ca8d"},q.map(function(e,a){return n.a.createElement(Y.a,{key:a,fill:$[a%$.length]})})),n.a.createElement(B.a,null))),n.a.createElement("div",null,n.a.createElement("p",{className:"head"},"Drone"),n.a.createElement("p",null,"Maveric"),n.a.createElement("p",null,"Intel Aero #1"),n.a.createElement("p",null,"Intel Aero #2"),n.a.createElement("p",null,"Spark"),n.a.createElement("p",null,"Hero")),n.a.createElement("div",null,n.a.createElement("p",{className:"head"},"Usage"),n.a.createElement("p",null,"10%"),n.a.createElement("p",null,"40%"),n.a.createElement("p",null,"30%"),n.a.createElement("p",null,"15%"),n.a.createElement("p",null,"5%")))),n.a.createElement(E.a,{className:"mainContainer duration"},n.a.createElement("p",{className:"head"},"Top Pilots"),n.a.createElement(I.a,null),n.a.createElement("div",{className:"column",style:{alignItems:"center"}},n.a.createElement(J.a,{style:{fontSize:60},color:"primary"}),n.a.createElement("div",{style:{padding:"10px",fontSize:"18px"}},"Mr. Yungpeng Li",n.a.createElement("br",null),"15 hours flight",n.a.createElement("br",null),"95% Safe Rate")),n.a.createElement("div",{className:"column",style:{alignItems:"center"}},n.a.createElement(J.a,{style:{fontSize:60},color:"secondary"}),n.a.createElement("div",{style:{padding:"10px",fontSize:"18px"}},"Mr. Yungpeng Li",n.a.createElement("br",null),"15 hours flight",n.a.createElement("br",null),"95% Safe Rate")))))))}}]),a}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[279,2,1]]]);
//# sourceMappingURL=main.c093073f.chunk.js.map