
# 运行流程
首先，安装@capacitor/android。

npm install @capacitor/android

接下来，添加Android的平台。
根目录执行下列命令

npx cap add android

android studio打开android目录
修改为https\://mirrors.cloud.tencent.com/gradle
![alt text](image.png)

注释掉
![alt text](image-1.png)

增加代理，提升下载速度
```

        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/central' }
```

![alt text](image-2.png)

确保安装了这个，否则无法启用wifi调试
![alt text](image-3.png)

打包
![alt text](image-4.png)

代码更新后，同步刷新安卓代码

ng build && npx cap copy


# i18n
参考：https://cloud.tencent.com/developer/article/1533019
```
$ npm install @ngx-translate/core @ngx-translate/http-loader --save
$ npm install @biesbjerg/ngx-translate-extract --save-dev

```

ngx-translate-extract 应用
接下来我们来使用 ngx-translate-extract 这个库实现自动抽取模板中使用 TranslatePipe 转换的键。为了方便后续操作，我们可以定义一个 npm script：

"extract": "ngx-translate-extract --input ./src/app --output ./src/assets/i18n/{zh-cn,zh-hk,en}.json --sort --format namespaced-json --format-indentation ' '",

上述 ngx-translate-extract 命令中所使用的参数：

–input：抽取字符串的目录；
–output：抽取结果的输出目录；
–sort：保存输出文件时， 按照字母顺序对键进行排序；
–format：指定输出的文件格式，支持 json、namespaced-json 及 pot，默认为 json；
–format-indentation：设置输出的缩进格式，默认为 \t。