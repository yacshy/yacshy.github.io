# Flutter

## 环境搭建

(中文网)[https://docs.flutter.cn/community/china?login=from_csdn]

- java
- Android Studio
- Android SDK
- Flutter SDK

### 检测环境

```text
flutter doctor

# 需要全部通过，都为 √ 
```

```text
[!] Network resources
✗ A network error occurred while checking "https://github.com/": 信号灯超时时间已到
! Doctor found issues in 1 category.

解决方案：
PowerShell 执行以下命令：
$Env:http_proxy="http://127.0.0.1:7890"
$Env:https_proxy="https://127.0.0.1:7890"
$Env:no_proxy="localhost,127.0.0.1,::1"
```
