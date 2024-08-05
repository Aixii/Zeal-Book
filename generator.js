let DocSetGenerator = require("docset-generator").DocSetGenerator;
let docSetGenerator = new DocSetGenerator({
  destination: "./output/",
  name: "Season",
  documentation: "./_book",
  icon: './icon.png',
  entries: [ // entries 可以设置 Docsets 的分类，一般一个分类对应一个 html
    {
      name: "个人资料",
      type: "Guide",
      path: "./index.html"
    },
  ]
});
docSetGenerator.create();