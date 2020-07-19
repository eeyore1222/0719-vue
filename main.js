console.log("js");

//定義渲染區域
//變數vue1 = new Vue(); - 要新增一個 Vue物件
//e1 指定元素 "選取器"
var vue1 = new Vue({
    el:"#vue1",
    data:{
        text: "哈囉，我是 vue~",
        a:50,
        b:30
        // 字串會直接增加，數字會進行運算
    }
});

var vue2 = new Vue({
    el:"#vue2",
    data:{
        aligment:"center",
        yahoo:"https://tw.yahoo.com/"
    }
})

var vue3 = new Vue({
    el:"#vue3",
    data:{
        //布林值 
        test: true,
        activity: false
    }
})