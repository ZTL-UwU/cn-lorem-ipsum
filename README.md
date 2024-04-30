# cn-lorem-ipsum

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

高效的中文随机 **假文&人名** 生成库

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
// 何女由些

cnLorem.phrase({ len: 20 });
// 它分里如美全选格术书分点信着像长有到最那

cnLorem.phrase({ min: 5, max: 8 });
// 整电叫在能许多己
```

### `.sentence(opt?: IOption)`

生成随机句子  
默认长度：15~30

```typescript
cnLorem.sentence();
// 它高走意年都，种形吃常看亲而，随美在老没。
```

### `.paragraph(opt?: IOption)`

生成随机段落  
默认长度：100~200

```typescript
cnLorem.paragraph();
/*
始和与您行愿演个未。己落全之个化越找照美你自爱，然方成几些老如报自人前造然。已然关分上南身问当，使答个什情和正它它应并，又而写同后是类，断死无多物我名现，们孩和世心可而从直苦主，女看身进，别工总衣统痛因开能，方年过手直在百双部象报比女。
*/
```

### `.article(opt?: IOption)`

生成随机文章（含换行）  
默认长度：600~1000

```typescript
cnLorem.article();
/*
名平独想米身必当妈是着两，月亲也夜客司，留笑学意认所，听本回可由达小出争还中。吧我起已得多他爱分，所无生信史把地现它。打文令气以里着成，事果窢回道方名红建夫进这最，上讲西球行说留；很有法其美自爱带大想些也下还作，见约常给动电华，民总住会很问次给无。想和望以些亲张了关晚系全平住演，能事绝东无纪本候站即您在。领意并爱定人总然到次，自且色爱发计名情要。也动手像直么从那和把！子了走文乐如很如中，重道夫准活新这了者等们实便现到。又经高月：布音应们无西。欢情员斯意所最作最，米主从但西亲就此步；世又中日作他在其面你：自望出知。已选得上命同你写元，总满师间它好回意只他很后諣或种。大到面间方使，还手打妈时面保！大然又以己得现里美国着对科，们现记自造解会第出，军马长作月说，家得稜作亚但直又在为人，十半因期十了学着道之。被起光说，已就约手表经望间但的下开。马他者个女学强同而死少三起这，之把间行儿和已，和使那得边回，走你用无统种，合道世通到教此界得或苦会因连，只消的同然，如钱太情大了装最，大子种家东许前然进他。友得于过世总还儿法它首说把作情。国法方动类儿她年活人，路动发斯身，别个加乐年现通天热！次得她眼事记信知交，日夜与钱去与说了方要亲答子量，方种乐眼已因把。许是日条处，各然平上之科军火经面对，车书经许难但提，为她书最都样之爱用个意什亚高意，动晚作随世最向岁意到关几。出记读动由道你完世使。去爸家性心感常制年就，它司会因拿自作斯争而目来字。光间不都快其思道周。感面但次思热动也定，大西如此分如办他。
海第北影只星者有了这树他斯由是，吗身命光与此。来吗那所此出怎就全交每联；断员之爱长欢小，讲又是位没和半联经文最为独点步。爱和立也者活自市，像统最高里间又但回时里，空特的们种国当处知看被海晚者。望年球尼客。在都难同妇此车些落照进喜听长活，花求世女对行复老！金军使者你中点，又所相的保还现，比成表现金进家，没个与年住世美夫下。电英表地书心个之她由不，长没西您常个我但和年只爱装意无，我金山欢好后大；有在爱对期几了实难病儿立，之使者还千窢奇。活来坐做第独城道窢这乎看，给然兴手斯生与之最曾知，拿回吃感会天没感什时千所经但。道工员己可阿意女，紧而世给几死同有常子多心小！比世法奇再说道爸手加身数片却其，画给下亲己布当信，死道头动但动他亲也消感，期刻它如妻情伤同言自到明，为面期放往是但。
*/
```

### `.name(opt?: { len?: number })`

生成随机人名  
默认长度：2~3

```typescript
cnLorem.name();
// 李秋识

cnLorem.name({ len: 2 });
// 韩迹
```

## Benchmark

|                                                       | paragraph - `1e7` |
| :---------------------------------------------------: | :---------------: |
|                  **cn-lorem-ipsum**                   |     812.0 ms      |
| [boocaii/cnlorem](https://github.com/boocaii/cnlorem) |      4.964 s      |

`11th Gen Intel i5-1135G7 (8) @ 4.200GHz` with `bun@1.1.6+e58d67b46`

<details>

```
Benchmark 1: bun run cn-lorem-ipsum.ts
  Time (mean ± σ):     812.0 ms ±  14.4 ms    [User: 609.1 ms, System: 237.0 ms]
  Range (min … max):   798.6 ms … 827.2 ms    3 runs
 
Benchmark 2: bun run cnlorem.ts
  Time (mean ± σ):      4.964 s ±  0.280 s    [User: 8.725 s, System: 0.441 s]
  Range (min … max):    4.660 s …  5.212 s    3 runs
 
Summary
  bun run cn-lorem-ipsum.ts ran
    6.11 ± 0.36 times faster than bun run cnlorem.ts
```

</details>

## Credits

- [boocaii/cnlorem](https://github.com/boocaii/cnlorem): for the inspiration and the dictionary.

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
