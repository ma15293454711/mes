"use strict";(self["webpackChunkzuoye"]=self["webpackChunkzuoye"]||[]).push([[763],{9763:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("van-index-bar",{attrs:{"index-list":t.cityType}},t._l(t.cityList,(function(i){return e("div",[e("van-index-anchor",{attrs:{index:i.type}}),t._l(i.city,(function(i){return e("van-cell",{attrs:{title:i.name},on:{click:function(e){return t.go(i.name,i.cityId)}}})}))],2)})),0)},o=[],r=(i(7658),i(6280)),c={mounted(){r.Z[0]({baseURL:"https://m.maizuo.com/gateway?k=668024",headers:{"X-Host":"mall.film-ticket.city.list"}}).then((t=>{console.log(t);for(var e=[],i=[],n=[],o=65;o<91;o++)i.push(String.fromCharCode(o));for(o=0;o<i.length;o++)n=t.data.data.cities.filter((t=>t.pinyin[0].toUpperCase()==i[o])),n.length>0&&e.push({type:i[o],city:n});console.log(e),this.cityList=e}))},data(){return{cityList:[]}},methods:{go(t,e){console.log(e),this.$store.commit("changeCity",[t,e]),this.$router.back()}},computed:{cityType(){return this.cityList.map((t=>t.type))}}},s=c,a=i(1001),l=(0,a.Z)(s,n,o,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=763.6f53e1fc.js.map