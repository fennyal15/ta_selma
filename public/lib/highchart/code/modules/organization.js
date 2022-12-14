/*
 Highcharts JS v10.3.2 (2022-11-28)
 Organization chart series type

 (c) 2019-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/organization",["highcharts","highcharts/modules/sankey"],function(n){b(n);b.Highcharts=n;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function n(b,a,h,l){b.hasOwnProperty(a)||(b[a]=l.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,module:b[a]}})))}
b=b?b._modules:{};n(b,"Series/Organization/OrganizationPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,a){function h(f){var b=f.linksFrom.length;f.linksFrom.forEach(function(c){c.id===c.toNode.linksTo[0].id?b+=h(c.toNode):b--});return b}var l=this&&this.__extends||function(){var b=function(a,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,b){c.__proto__=b}||function(c,b){for(var a in b)b.hasOwnProperty(a)&&(c[a]=b[a])};return b(a,c)};return function(a,
c){function f(){this.constructor=a}b(a,c);a.prototype=null===c?Object.create(c):(f.prototype=c.prototype,new f)}}(),d=a.defined,g=a.find,k=a.pick;return function(b){function a(){var c=null!==b&&b.apply(this,arguments)||this;c.fromNode=void 0;c.linksFrom=void 0;c.linksTo=void 0;c.options=void 0;c.series=void 0;c.toNode=void 0;return c}l(a,b);a.prototype.getSum=function(){return 1};a.prototype.setNodeColumn=function(){b.prototype.setNodeColumn.call(this);var c=this,a=c.getFromNode().fromNode;if(!d(c.options.column)&&
0!==c.linksTo.length&&a&&"hanging"===a.options.layout){c.options.layout=k(c.options.layout,"hanging");c.hangsFrom=a;var f=-1;g(a.linksFrom,function(a,b){(a=a.toNode===c)&&(f=b);return a});for(var u=0;u<a.linksFrom.length;u++){var m=a.linksFrom[u];m.toNode.id===c.id?u=a.linksFrom.length:f+=h(m.toNode)}c.column=(c.column||0)+f}};return a}(b.seriesTypes.sankey.prototype.pointClass)});n(b,"Series/Organization/OrganizationSeriesDefaults.js",[],function(){"";return{borderColor:"#666666",borderRadius:3,
link:{color:"#666666",lineWidth:1,radius:10,type:"default"},borderWidth:1,dataLabels:{nodeFormatter:function(){function b(b){return Object.keys(b).reduce(function(a,c){return a+c+":"+b[c]+";"},'style="')+'"'}var a={width:"100%",height:"100%",display:"flex","flex-direction":"row","align-items":"center","justify-content":"center"},h={"max-height":"100%","border-radius":"50%"},l={width:"100%",padding:0,"text-align":"center","white-space":"normal"},d={margin:0},g={margin:0},k={opacity:.75,margin:"5px"},
f=this.point,q=f.description,c=f.image;f=f.title;c&&(h["max-width"]="30%",l.width="70%");this.series.chart.renderer.forExport&&(a.display="block",l.position="absolute",l.left=c?"30%":0,l.top=0);a="<div "+b(a)+">";c&&(a+='<img src="'+c+'" '+b(h)+">");a+="<div "+b(l)+">";this.point.name&&(a+="<h4 "+b(d)+">"+this.point.name+"</h4>");f&&(a+="<p "+b(g)+">"+(f||"")+"</p>");q&&(a+="<p "+b(k)+">"+q+"</p>");return a+"</div></div>"},style:{fontWeight:"normal",fontSize:"13px"},useHTML:!0},hangingIndent:20,hangingIndentTranslation:"inherit",
minNodeLength:10,nodeWidth:50,tooltip:{nodeFormat:"{point.name}<br>{point.title}<br>{point.description}"}}});n(b,"Series/PathUtilities.js",[],function(){return{curvedPath:function(b,a){for(var h=[],l=0;l<b.length;l++){var d=b[l][1],g=b[l][2];if("number"===typeof d&&"number"===typeof g)if(0===l)h.push(["M",d,g]);else if(l===b.length-1)h.push(["L",d,g]);else if(a){var k=b[l-1],f=b[l+1];if(k&&f){var q=k[1];k=k[2];var c=f[1];f=f[2];if("number"===typeof q&&"number"===typeof c&&"number"===typeof k&&"number"===
typeof f&&q!==c&&k!==f){var r=q<c?1:-1,w=k<f?1:-1;h.push(["L",d-r*Math.min(Math.abs(d-q),a),g-w*Math.min(Math.abs(g-k),a)],["C",d,g,d,g,d+r*Math.min(Math.abs(d-c),a),g+w*Math.min(Math.abs(g-f),a)])}}}else h.push(["L",d,g])}return h}}});n(b,"Series/Organization/OrganizationSeries.js",[b["Series/Organization/OrganizationPoint.js"],b["Series/Organization/OrganizationSeriesDefaults.js"],b["Core/Series/SeriesRegistry.js"],b["Series/PathUtilities.js"],b["Core/Utilities.js"]],function(b,a,h,l,d){var g=this&&
this.__extends||function(){var b=function(a,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return b(a,c)};return function(a,c){function m(){this.constructor=a}b(a,c);a.prototype=null===c?Object.create(c):(m.prototype=c.prototype,new m)}}(),k=h.seriesTypes.sankey,f=d.css,q=d.extend,c=d.merge,r=d.pick;d=function(b){function d(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=
void 0;a.points=void 0;return a}g(d,b);d.prototype.alignDataLabel=function(a,c,d){var m=a.shapeArgs;if(d.useHTML&&m){var e=m.width||0,p=m.height||0,x=this.options.borderWidth+2*this.options.dataLabels.padding;this.chart.inverted&&(e=p,p=m.width||0);p-=x;e-=x;if(m=c.text)f(m.element.parentNode,{width:e+"px",height:p+"px"}),f(m.element,{left:0,top:0,width:"100%",height:"100%",overflow:"hidden"});c.getBBox=function(){return{width:e,height:p,x:0,y:0}};c.width=e;c.height=p}b.prototype.alignDataLabel.apply(this,
arguments)};d.prototype.createNode=function(a){a=b.prototype.createNode.call(this,a);a.getSum=function(){return 1};return a};d.prototype.pointAttribs=function(b,a){var c=k.prototype.pointAttribs.call(this,b,a),d=this.mapOptionsToLevel[(b.isNode?b.level:b.fromNode.level)||0]||{},e=b.options,p=d.states&&d.states[a]||{};a=r(p.borderRadius,e.borderRadius,d.borderRadius,this.options.borderRadius);var m=r(p.linkColor,e.linkColor,d.linkColor,this.options.linkColor,p.link&&p.link.color,e.link&&e.link.color,
d.link&&d.link.color,this.options.link&&this.options.link.color),f=r(p.linkLineWidth,e.linkLineWidth,d.linkLineWidth,this.options.linkLineWidth,p.link&&p.link.lineWidth,e.link&&e.link.lineWidth,d.link&&d.link.lineWidth,this.options.link&&this.options.link.lineWidth);d=r(p.linkOpacity,e.linkOpacity,d.linkOpacity,this.options.linkOpacity,p.link&&p.link.linkOpacity,e.link&&e.link.linkOpacity,d.link&&d.link.linkOpacity,this.options.link&&this.options.link.linkOpacity);b.isNode?a&&(c.r=a):(c.stroke=m,
c["stroke-width"]=f,c.opacity=d,delete c.fill);return c};d.prototype.translateLink=function(b){var a=b.fromNode,c=b.toNode,d=r(this.options.linkLineWidth,this.options.link.lineWidth),e=Math.round(d)%2/2,f=r(this.options.link.offset,.5),m=r(b.options.link&&b.options.link.type,this.options.link.type);if(a.shapeArgs&&c.shapeArgs){var k=Math.floor((a.shapeArgs.x||0)+(a.shapeArgs.width||0))+e,h=Math.floor((a.shapeArgs.y||0)+(a.shapeArgs.height||0)/2)+e,g=Math.floor(c.shapeArgs.x||0)+e,t=Math.floor((c.shapeArgs.y||
0)+(c.shapeArgs.height||0)/2)+e,q=this.options.hangingIndent;var n=c.options.offset;var u=/%$/.test(n)&&parseInt(n,10),v=this.chart.inverted;v&&(k-=a.shapeArgs.width||0,g+=c.shapeArgs.width||0);n=this.colDistance?Math.floor(g+(v?1:-1)*(this.colDistance-this.nodeWidth)/2)+e:Math.floor((g+k)/2)+e;u&&(50<=u||-50>=u)&&(n=g=Math.floor(g+(v?-.5:.5)*(c.shapeArgs.width||0))+e,t=c.shapeArgs.y||0,0<u&&(t+=c.shapeArgs.height||0));c.hangsFrom===a&&(this.chart.inverted?(h=Math.floor((a.shapeArgs.y||0)+(a.shapeArgs.height||
0)-q/2)+e,t=(c.shapeArgs.y||0)+(c.shapeArgs.height||0)):h=Math.floor((a.shapeArgs.y||0)+q/2)+e,n=g=Math.floor((c.shapeArgs.x||0)+(c.shapeArgs.width||0)/2)+e);b.plotX=n;b.plotY=(h+t)/2;b.shapeType="path";"straight"===m?b.shapeArgs={d:[["M",k,h],["L",g,t]]}:"curved"===m?(a=Math.abs(g-k)*f*(v?-1:1),b.shapeArgs={d:[["M",k,h],["C",k+a,h,g-a,t,g,t]]}):b.shapeArgs={d:l.curvedPath([["M",k,h],["L",n,h],["L",n,t],["L",g,t]],r(this.options.linkRadius,this.options.link.radius))};b.dlBox={x:(k+g)/2,y:(h+t)/2,
height:d,width:0}}};d.prototype.translateNode=function(b,a){k.prototype.translateNode.call(this,b,a);a=b.hangsFrom;var c=this.options.hangingIndent||0,d=this.chart.inverted?-1:1,e=b.shapeArgs,f=this.options.hangingIndentTranslation,g=this.options.minNodeLength||10;if(a)if("cumulative"===f)for(e.height-=c,e.y-=d*c;a;)e.y+=d*c,a=a.hangsFrom;else if("shrink"===f)for(;a&&e.height>c+g;)e.height-=c,a=a.hangsFrom;else e.height-=c,this.chart.inverted||(e.y+=c);b.nodeHeight=this.chart.inverted?e.width:e.height};
d.defaultOptions=c(k.defaultOptions,a);return d}(k);q(d.prototype,{pointClass:b});h.registerSeriesType("organization",d);"";return d});n(b,"masters/modules/organization.src.js",[],function(){})});
//# sourceMappingURL=organization.js.map