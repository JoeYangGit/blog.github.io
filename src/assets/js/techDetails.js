const techDetails = {
  '20190618-1': {
    title: '搭建个站初体验',
    contents: [
      {
        title: '',
        content: ['从大学毕业，进入工作之后，一直有一个想法，就是能自己搭建一个自己的网站。无奈的是，当时满腔的激情却因为自身技术不够，渐渐的放下了这个想法，沉入心底，好好修炼提升自己。如今，转行做前端也2年了，现在自身的技术搭建个人网站已足矣，所以拾起当年的梦，第一篇文便用来记录搭建个站的路程。（感谢小周同志让我想起曾经的梦）']
      },
      {
        title: '一、了解GitHub Pages',
        content: [
          '下定决心之后，首先分析一个网站必要的条件是什么？页面代码 + 服务器 + 公网域名。页面代码当然是选择自己写咯，但是服务器和公网域名怎么办？于是，去找度娘询问了一番，了解到可以通过购买公网域名或者使用GitHub提供免费的GitHub Pages来解决。接下来，纠结症爆发，最后左右权衡之下，先选择GitHub Pages搭建，等个站成熟之后，再选择购买域名。',
          '打开GitHub Pages网站，官网已经将搭建过程写了出来，第一步，当然是创建一个GitHub账号，新建一个Repository也就是仓库。第二步，新建本地仓库文件夹，将远程仓库克隆到本地仓库（在这一步的过程中发现了新大陆！GitHub出了一个GitHub Desktop应用程序，主要功能是统一管理所有Git项目，再也不用去每个文件夹里面敲命令操作，有点像之前使用的SourceTree）。第三步，在本地仓库中搭建项目，开始码代码，然后commit & push。',
          '代码上传完之后，就是配置如何部署了。网页打开GitHub，登录账号之后，打开自己的远程仓库，可以看到自己的代码，然后找到并打开Settings标签，修改Repository name为 ***.github.io（***表示自定义，随意取名），然后向下翻，找到GitHub Pages设置，在Source下方有一个下拉框选择部署文件的位置，建议选择第二项，master branch/docs folder（GitHub去master分支下的docs文件夹中寻找index.html入口文件，所以要保证部署文件放在docs文件夹下），选择之后，上面就会有一个绿色条提示你项目部署的网址，打开网址就能看到你的项目。'
        ]
      },
      {
        title: '二、项目框架搭建',
        content: [
          '此次项目使用的是Vue-Cli 3来搭建项目，项目中引入的模块有Vue-Router、Vuex以及Less。使用Vue-Cli 3以及Less的目的是想要学习新的东西，之前一直用的是Vue-Cli 2和CSS，既然新的东西出来了，咱们就该去了解学习。',
          '很明确，现在是一个静态网站，没有数据库，没有后台，所有的数据处理全部都由前端进行。首先，在项目的根目录下，新建vue.config.js文件，在里面修改webpack的相关配置，此项目主要修改打包文件夹的配置，以及文件相对路径的配置。',
          '开始开发导航栏，导航栏是每一页都会有的，所以写在App.vue中。在写导航栏的过程中，发现既然是个人网站，那么属于自己的Logo是少不了的，于是又开始Logo的创作之旅（在Logo的创作过程中要感谢大玲子，这里手动@Joee Ding）。',
          '接下来，确定整个页面的风格以及主题色等，这里选用了和自己简历的同一种颜色 #CCA473 作为主色，整体页面选择扁平化风格，毕竟开发起来更简单嘛，而且看起来更干净。这里更多的一些细节就不说了，总之纠结了很久，最后才确定了现在的风格以及配色。',
          '然后，修改router.js、main.js来配置页面路由跳转以及访问路径。'
        ]
      },
      {
        title: '三、项目代码开发',
        content: [
          '项目的框架搭建完毕之后，就正式开始开发页面了',
          '最先开发的是首页，从设计Banner开始，选择了两张自己在旅游时候拍摄的照片，作为底图然后上面使用两头渐变的遮罩遮挡住了图片的边框，这种若隐若现的感觉，嗯，是我想要的，哈哈哈哈。',
          '然后，开始设计文章的概览部分，首页展示最近3篇文章，点击更多跳转到文章列表，最开始是统一都叫做文章，后来写内容详情的时候发现还是得细分一下，这样才能更好的对自己的文章进行分类，同时网站也不会看着太乱。这样就出现了现在的技术类、游记类以及随笔类的分块。',
          '在设计详情页面的时候，考虑到可复用性，将其组件化，所以所有类型都使用同一个组件，根据type的不同加载不同的组件，从而形成不同的页面展示效果，同时也大致思考了以后自己各种类型文章的布局以及样式，目前游记类只提供了4种布局，技术类和随笔类都只有2种，相信随着以后文章的增加会有更多的需求，增加更多的布局，内容更加丰富。',
          '文章列表页面使用了前端做的分页，为了保证布局，使用了空数据来填充位置，每次分页都重新计算数据是否能填充满，不能则给空数组增加缺少个数的空数据，使其始终有6个块渲染在页面上。'
        ]
      },
      {
        title: '',
        content: [
          '写到这里，感觉这一篇并不像技术文，更像是一篇记录。谨以此文纪念个站首文。',
          '生活需要的也正是这种仪式感吧～'
        ]
      }
    ]
  }
}

export default techDetails
