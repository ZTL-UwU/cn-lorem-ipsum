# cn-lorem-ipsum

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

高效的中文随机 **假文&名字** 生成库

## Installation

```bash
// npm
npm i -D cn-lorem-ipsum

// pnpm
pnpm i -D cn-lorem-ipsum

// bun
bun i -D cn-lorem-ipsum
```

## Usage

```typescript
import cnLorem from 'cn-lorem-ipsum';
```

### 传参类型
```typescript
interface IOption {
  len?: number; // 固定长度（包含标点与换行）
  min?: number; // 随机长度下限
  max?: number; // 随机长度上限
}
```

### `.phrase(opt?: IOption)`

生成随机语句（无标点）  
默认长度：3~10

```typescript
cnLorem.phrase();
// 士乞们形竖迎

cnLorem.phrase({ len: 20 });
// 型田刮便侮娇看免防字乖万独序枯拘则买冲看

cnLorem.phrase({ min: 5, max: 8 });
// 活头总妻泉儿未
```

### `.sentence(opt?: IOption)`

生成随机句子  
默认长度：15~30

```typescript
cnLorem.sentence();
// 沉幸胜炕贺兔正，末又讯阿市申收砌冷份。
```

### `.paragraph(opt?: IOption)`

生成随机段落  
默认长度：100~200

```typescript
cnLorem.sentence();
/*
炒炕走迈组划岂乱沾妥旬胀昌十。库忽织砌岗，狂骂坏吞厌。丙议尝版芳宅贸音贞居耐伪蚂佣，似法码正武。红建汪昨钩季号先攻纠由纳驾岛，底秋凭帮乱当拉波，示讲侄帮么易顺届侍驾室宙咱恼！陕妙享恢闲怕抛杜乳丘降，刀施亮英旬叹宪和沿，收受坊务争扬映拦。型发典虎后钞大严冷衣进冲实？仰劣狭千坝枕怎同则，线迎闭对朵讽肉疤。
*/
```

### `.article(opt?: IOption)`

生成随机文章（含换行）  
默认长度：600~1000

```typescript
cnLorem.article();
/*
柱适非肺胆诗均众。迹肝劲待。贞似我板先津吊咏驻疯写宁京执。拐尝劳万庄告肿明泥星，吼启扁否乳指贺攻训么。纱总矿辰；岂庙字花困。例证四首秀壳虏阿列免义，白指怒知语古才劲弓谷员侍。修念炭告权畏欣轧，忍故驳护垄休芒差了男刊狡柱严，栋违扭华泛芒钞，蚂阿这面声帅城底泻狠干玉抵邮刻，光制标肚贩厚七表吊讯刊匆。荒姻十划址好行兰选，迈导诉牢盲圣，姓拦旷同。拉转启芝伐如眨昏他世斥迫。扔甘执沟人亩南岛终报盼当招，俊备汁标郑吵。
信围浅规。乔付纹炼冷码阴，研近例汗乒含乡泄种隶柔，边低厚划古形扛则灰。次疯贫金肢，杰承条或饥尝妙炸押皇束险，坏盾草应疯胡彻树肚污形。品充西十单或玩把轻神府乎士，企香险九势背叛狠，这圣拔拾块权灿，旦折衬怪但丙，刮才哀组每返夹误沸。扁尖将绍人饶凡规战，仔柿虹劳广饼皂显边攻干饲忧变。芒刺亭详层员龟百奏炼君放显抛目，观架件受述昆，吐盈斥夕辛盼欧贴临：杠赴叔壳或七组吨级夕。极驼创众剃红总呀负还，人他上拣砖报右竿房击戏迈，许屈任鸡到固，邻冲浇恒戒房安关报背，总顷妖纺秋茶曲茧荒讽迹，非转寺更亚定既弟巩民驰叉皂；岂色毕恼冰。形池穴驱夜定贫抚指迁驴沃威，与供伏形抚妖诊狗来眨波杆昨券，申非名庙凯由扯本，坛毕达说抢十另育肿货大思咸：正疗昆诊伴孩昌妈担百钥态妥杆。既召饰柜，巡济行哑迁范妹雨尿殃讨达。挡尼杰诞包狡码津。拣早守抽句勺丽乙夹吧迅孩。拥凯卷凭半肿汉拨歼胡苹孤此尚，份映出测院伤秒衣罚妇吨重肉扭免，协姿挣。
世务话坡枣佳度味约地曲，朋范亭弄昏诗！别人并力芽范军矩担红；批肉矩洒刃纠段虾间，胃哄狂字加荒抚建峡重却者，毕刻拼尽声郊乳玉阴。爸仰金飞坐招诚序，巩干男国。泼泛依驴浓仔苍披，评春食负逃弓纺京含贺，史护吐寸浇发诉我具版挤妨永狮，抓俊过垫奖拔财胆把衬苏。蚀丸昼香壮范贸希山砖，伶协费奴制郑页邻，至昏茎苗细扔怖阿而在礼袄。肤贴石思适服一朱。汉刀厂饰存南当巾齿姻。交沈除作业杆怀言，忙忽草狗拒。京查乞小叹同，社昆末厉蚀叔珍吸某炉圾。住剂帜送奋驰亿垄眨穿姻禾映秒朱。托宫实贩罚七秀耍巾，侮沫哄彻妻坏巷虽亏说。视沈别问，代巧讽背物姥是。司苗扭咸竖岭治将。束之代役耍佛，虎胆松名，伤外狗灭昏杂县寺沫两壳白芬串，牢伪注儿国启呀驱尚炉秀详纱论，拢兆室纤。钢洽仙钞杨几宏往急朽劳叔礼。诵好羊店，执并诊闻枯胃斧与右大律半奸栋。
*/
```

### `.name(opt?: { len?: number })`

生成随机名字  
默认长度：2~3

```typescript
cnLorem.name();
// 李秋识

cnLorem.name({ len: 2 });
// 韩迹
```

## Benchmark

|                                                       |  `1e7`   |
| :---------------------------------------------------: | :------: |
|                  **cn-lorem-ipsum**                   | 828.2 ms |
| [boocaii/cnlorem](https://github.com/boocaii/cnlorem) | 4.819 s  |

`11th Gen Intel i5-1135G7 (8) @ 4.200GHz` with `bun@1.1.5+b257a3097`

<details>

```
Benchmark 1: bun run cn-lorem-ipsum.ts
  Time (mean ± σ):     828.2 ms ±  12.1 ms    [User: 613.3 ms, System: 243.9 ms]
  Range (min … max):   814.9 ms … 838.6 ms    3 runs
 
Benchmark 2: bun run cnlorem.ts
  Time (mean ± σ):      4.819 s ±  0.252 s    [User: 8.589 s, System: 0.393 s]
  Range (min … max):    4.537 s …  5.023 s    3 runs
 
Summary
  bun run cn-lorem-ipsum.ts ran
    5.82 ± 0.32 times faster than bun run cnlorem.ts
```

</details>

## Contributors

<a href="https://github.com/ZTL-UwU/cn-lorem-ipsum/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ZTL-UwU/cn-lorem-ipsum" />
</a>

## License

MIT

[npm-version-src]: https://img.shields.io/npm/v/cn-lorem-ipsum?style=flat&colorA=080f12&colorB=F2D750
[npm-version-href]: https://npmjs.com/package/cn-lorem-ipsum
[npm-downloads-src]: https://img.shields.io/npm/dm/cn-lorem-ipsum?style=flat&colorA=080f12&colorB=F2D750
[npm-downloads-href]: https://npmjs.com/package/cn-lorem-ipsum
[bundle-src]: https://img.shields.io/bundlephobia/minzip/cn-lorem-ipsum?style=flat&colorA=080f12&colorB=F2D750&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=cn-lorem-ipsum
[license-src]: https://img.shields.io/github/license/ZTL-UwU/cn-lorem-ipsum.svg?style=flat&colorA=080f12&colorB=F2D750
[license-href]: https://github.com/ZTL-UwU/cn-lorem-ipsum/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=F2D750
[jsdocs-href]: https://www.jsdocs.io/package/cn-lorem-ipsum
