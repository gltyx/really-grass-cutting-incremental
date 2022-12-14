/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "/cut": "/割草",
    "Auto: OFF": "自动：关闭",
    "Automation Upgrades": "自动化升级",
    "Buy 1": "购买 1",
    "Buy All": "购买全部",
    "Buy Max": "购买最大",
    "Cancel": "取消",
    "Click any challenge to start! Click again to exit.": "点击任何挑战开始！再次单击退出。",
    "Crystal Upgrades": "水晶升级",
    "Crystallize": "结晶",
    "Crystallizing resets everything prestige as well except Platinum for Crystals.": "结晶也会重置所有声望，除了水晶的铂金。",
    "Effect:": "影响：",
    "Endgame: Level 370, Tier 24, 7 Grasshop": "残局：370 级、24 级、7 级草场",
    "every completions.": "每个完成。",
    "every grasshop.": "每一个草场。",
    "every grasshop. Keep Prestige challenges on Grasshop.": "每一个草场。在 草场 上保持声望挑战。",
    "every grasshop. Unlock more automation upgrades.": "每一个草场。解锁更多自动化升级。",
    "Gain": "获得",
    "Gain more Crystals based on your tier and PP.": "根据您的等级和 PP 获得更多水晶。",
    "Gain more PP based on your level and grass.": "根据你的等级和草获得更多的 PP。",
    "Goal: ???": "目标： ？？？",
    "Grass Cutting Incremental": "割草增量",
    "Grass Upgrades": "草升级",
    "Grasshop": "草场",
    "Grasshop once to unlock.": "草场 一次解锁。",
    "Grasshop!": "草场！",
    "Grasshopping resets everything crystalize does as well as crystals, crystal upgrades, challenges.": "草场重置一切结晶以及水晶，水晶升级，挑战。",
    "Grassless": "无草",
    "Hard Reset": "硬重置",
    "Hide upgrades which is maxed/purchased:": "隐藏已最大化/购买的升级：",
    "Inactive": "不活跃",
    "Join Discord Server": "加入 Discord 服务器",
    "Keep Crystallize challenges on Grasshop.": "在 草场 上保留 结晶 挑战。\n",
    "Less Level": "更少的等级",
    "Level": "等级",
    "more grass. Grass gain is increased by": "更多的草。草增益增加",
    "more TP. TP gain is increased by": "更多的TP。 TP 增益增加",
    "more XP. XP gain is increased by": "更多经验值。 XP增益增加",
    "No Tiers": "无等级",
    "per completion.": "每次完成。",
    "per grasshop (start at 3). Unlock more automation upgrades.": "每个草场（从 3 开始）。解锁更多自动化升级。",
    "Perk Upgrades": "天赋升级",
    "Platinum Chance": "白金几率",
    "Platinum Upgrades": "白金升级",
    "Platinum worth": "白金价值",
    "Prestige": "声望",
    "Prestige Upgrades": "声望升级",
    "Prestigeless": "没有声望",
    "Prestiging resets your grass, grass upgrades, level and perks for Prestige Points (PP).": "声望会重置你的草、草升级、等级和天赋对于声望点 (PP)。",
    "Reach Level 200 to unlock": "达到200级解锁",
    "Really Grass Cutting Incremental - Prototype v0.3 - Made by MrRedShark77": "真正的割草增量 - Prototype v0.3 - 由 MrRedShark77 制作",
    "Reduced Resources": "减少资源",
    "Reward: Grass gain is increased by": "奖励：草增益增加",
    "Reward: Grass multiplier's exponent is increased by": "奖励：草乘数的指数增加",
    "Reward: PP gain is increased by": "奖励：PP增益增加",
    "Reward: TP gain is increased by": "奖励：TP增益增加",
    "Reward: XP gain is increased by": "奖励：经验增益增加",
    "Status:": "地位：",
    "The game inspired by": "游戏灵感来自",
    "The Level requirement is expensive.": "级别要求很昂贵。",
    "Tier": "等级",
    "times": "次",
    "Warning! Recommended size is 1920x1080! You may change zoom!": "警告！推荐尺寸为1920x1080！您可以更改缩放！",
    "You cannot buy any grass upgrades.": "您不能购买任何草升级。",
    "You cannot buy any Prestige Upgrades.": "您不能购买任何声望升级。",
    "You cannot tier up.": "你不能提升层级。",
    "You have grasshopped": "你有草场",
    "Prestige once to unlock.": "声望一次以解锁。",
    "Reach Level 30 to Prestige.": "达到声望等级 30。",
    "argh": "啊啊",
    "^0.5 to Grass, XP & PP gain.": "^0.5 草、经验 和 声望点 增益。",
    "Reach Level 5 to unlock.": "达到5级以解锁。",
    "doubled": "翻倍",
    "every": "每个",
    "Grass Value": "草价值",
    "Grow Speed": "成长速度",
    "Increase experience (XP) gained by": "增加获得的经验（XP）",
    "Increase grass cap by": "增加草上限",
    "Increase grass cut range by": "将割草范围增加",
    "Increase Grass gain by": "增加草增益",
    "Increase grass grow speed by": "将草的生长速度提高",
    "levels.": "等级。",
    "More Grass": "更多的草",
    "per level.": "每级。",
    "per level. Base is 50.": "每级。 基数为 50。",
    "Range": "范围",
    "This effect is": "这个效果是",
    "XP": "经验值",
    "Grow Amount Perk": "生长数量天赋",
    "Grow Speed Perk": "成长速度天赋",
    "Increase the grass grow amount by": "将草的生长量增加",
    "Increase XP gain by": "增加经验增益",
    "per level multiplied by experience level.": "每个等级乘以经验等级。",
    "Range Perk": "范围天赋",
    "Value Perk": "价值天赋",
    "XP Perk": "经验天赋",
    "Cap Perk": "上限天赋",
    "Auto cuts grass every": "自动割草每",
    "Autocut": "自动割草",
    "seconds (-1s every level after the first).": "秒（第1级之后的每个等级 -1 秒）。",
    "Maxed": "最大",
    "Auto cuts grass is worth": "自动割草值得",
    "Autocut Amount": "自动割草数量",
    "Autocut Value": "自动割草",
    "Grass Upgrade Autobuy": "草升级自动购买",
    "Increases auto cut amount by": "将自动割草数量增加",
    "more grass, XP & TP.": "更多的草，经验和TP。",
    "Perk Save P": "天赋保存 P",
    "Reach Tier 3 to unlock.": "达到第 3 层即可解锁。",
    "Decreases auto cut time by": "将自动切割时间减少",
    "Increase grass gain by": "增加草增益",
    "Plat Grass": "白金草",
    "Plat XP": "白金经验",
    "seconds per level.": "秒每级。",
    "Starter AC": "起动机交流电",
    "Crystallize once to unlock.": "结晶一次即可解锁。",
    "for every": "对于每个",
    "Grass Value II": "草价值 II",
    "Increase Tier Points (TP) gain by": "将层级点数 (TP) 增益提高",
    "levels": "等级",
    "per level. This effect is": "每级。 这个效果是",
    "per level. This effect is increased by": "每级。 这个效果增加了",
    "Prestige Points": "声望点",
    "Reach Level 100 to Crystallize.": "达到 100 级即可结晶。",
    "Anti-Grass Upgrades": "反草升级",
    "Assembler": "汇编器",
    "Best Charge Milestones:": "最佳充能里程碑：",
    "Challengerism": "挑战者主义",
    "Charge rate is increased by": "充能率增加",
    "Charger charge bonuses increase": "充能器充能奖励增加",
    "Charger charge bonuses increase another": "充能器充能奖励增加另一个",
    "Crystalless": "无晶体",
    "Decelerate": "减速",
    "Decelerating will temporarily slow down time and reduce the effectiveness of everything significantly until you press the Accelerate button.": "减速会暂时减慢时间并显着降低一切的有效性，直到您按下加速按钮。",
    "Decelerator": "减速器",
    "During this time you will not be able to earn regular grass, Instead you earn anti-grass which is spent in Anti-grass upgrades panel which takes the place of regular Grass Upgrades panel.\n    These upgrades affect the normal realm.": "在此期间，您将无法获得普通草，而是获得用于代替普通草升级面板的反草升级面板中的反草。\n这些升级会影响正常领域。",
    "Endgame: Level 850, Tier 64, 34 Grasshop; Level 30 in Anti-Realm": "残局：850级，64级，34级草场；反境界30级",
    "Foundry": "铸造厂",
    "Gain more Steels based on grasshop and Crystal.": "获得更多基于草和水晶的钢铁。",
    "Generator": "发电机",
    "However, and level scales instantly.": "但是，级别会立即扩展。",
    "OoM (order of magnitude) sooner.": "OoM（数量级）更快。\n",
    "OoM sooner per grasshop starting at 24.": "从 24 点开始，每个草场的 OoM 会更快。",
    "OoM sooner. Grasshop animation will no longer play.": "OoM 越快越好。 草场 动画将不再播放。\n",
    "Really Grass Cutting Incremental - Prototype v0.3.2 - Made by MrRedShark77": "真正的割草增量 - Prototype v0.3.2 - Made by MrRedShark77",
    "Reduced Resources II": "减少资源 II",
    "Reset everything grasshop does, but it benefits from the milestones for grasshop.": "重置 草场 所做的一切，但它受益于 草场 的里程碑。",
    "Reward: Charge rate is increased by": "奖励：充能率增加",
    "Reward: Crystal gain is increased by": "奖励：水晶增益增加",
    "Reward: Grass effect's exponent is increased by": "奖励：草效果指数增加",
    "Reward: Steel gain is increased by": "奖励：钢铁增益增加",
    "Steelie": "Steelie",
    "Steelie!": "Steelie！",
    "The Factory": "工厂",
    "Tier multiplier's exponent is increased by": "层乘数的指数增加了",
    "Unlock Steelie reset. Grasshop does not reset perks.": "解锁 Steelie 重置。 草场 不会重置特权。\n",
    "Unlock two more generator upgrades related to charge.": "解锁另外两个与充能相关的发电机升级。\n",
    "You are trapped in Prestige & Crystal Challenges (except Reduced Resources).": "您被困在声望和水晶挑战中（资源减少除外）。",
    "You cannot buy any Crystal Upgrades.": "您不能购买任何水晶升级。",
    "Reach Level 1 to unlock.": "达到 1 级即可解锁。",
    "Auto: ON": "自动: 开启",
    "Crystals": "水晶",
    "Grass Value III": "草价值 III",
    "Increase PP gain by": "提高 PP 增益",
    "Reach Level": "达到等级",
    "Steel": "钢",
    "Unlock a building (on bottom of Factory) where you can slow down time. Each level increases charge rate by": "解锁一座建筑（位于工厂底部），您可以在其中放慢时间。 每个级别增加充能率",
    "to Grasshop": "到草场",
    "Crystal Charge": "水晶充能",
    "Increase charge rate by": "将充能率提高",
    "Increase steel gain by": "增加钢增益",
    "Steel Prestige": "钢声望",
    "Temp. Charge:": "Temp. 充能：",
    "to PP/Crystal generator multiplier from factory upgrade": "从工厂升级到 PP/水晶生成器乘数",
    "to Steel multiplier based on time since last steelie (max 1 hour)": "到 钢 乘数基于自上次 Steelie 以来的时间（最多 1 小时）",
    "Best Charge:": "最佳充能：",
    "(softcapped)": "(软上限了)",
    "Anonymity": "匿名",
    "Anonymity resets your anti-grass, anti-grass upgrades, level for Anonymity Points (AP).": "匿名会重置您的反草、反草升级、匿名点数 (AP) 级别。",
    "Anonymity Upgrades": "匿名升级",
    "Buy Next": "购买下一个",
    "Crystal Perk": "水晶天赋",
    "Decelerating will force a Steelie.": "减速将迫使 Steelie。",
    "Endgame: Level 950, Tier 75, 37 Grasshop; Level 100 in Anti-Realm": "残局：950级、75级、37级草场； 反境界100级",
    "Gain more AP based on your level and anti-grass.": "根据您的等级和防草获得更多 AP。",
    "Grass Value III, XP III, TP II & PP": "草价值 III、XP III、TP II 和 PP",
    "Increase AP gain by": "增加AP增益",
    "Increase Crystal gain by": "增加水晶增益",
    "Increase Crystal multiplier's exponent by": "将水晶乘数的指数增加",
    "Increase PP multiplier's exponent by": "将 PP 乘数的指数增加",
    "Increase TP gain by": "增加 TP 增益",
    "Limitless Crystal Upgrades": "无限水晶升级",
    "Limitless Crystal Upgrades II": "无限水晶升级 II",
    "Limitless Grass Upgrades": "无限草升级",
    "Limitless Grass Upgrades II": "无限草升级 II",
    "Limitless Prestige Upgrades": "无限声望升级",
    "Plat Anonymity": "平台匿名",
    "Plat PP": "平台 PP",
    "Plat-Exponential PP": "平台指数 PP",
    "PP Perk": "PP天赋",
    "Prestige Upgrades will no longer have maximum limit.": "声望升级将不再有最大限制。",
    "Really Grass Cutting Incremental - Prototype v0.3.3 - Made by MrRedShark77": "真正的割草增量 - Prototype v0.3.3 - 由 MrRedShark77 制作",
    "Crystal Generation": "水晶生成",
    "passive Crystal generation per level.": "每级被动水晶生成。",
    "passive PP generation per level.": "每级被动 PP 生成。",
    "PP Generation": "PP 生成",
    "Prestige Charge": "声望充能",
    "Charger": "充电器",
    "Unlock a building (on bottom of Factory) where you can unscale anything. Each level increases charge rate by": "解锁一座建筑物（位于工厂底部），您可以在其中取消缩放任何东西。 每个级别增加充能",
    "Unlock a building (on right of Factory) where you can boost production multipliers with charge. Each level increases charge rate by": "解锁一座建筑物（位于工厂右侧），您可以在其中通过充能提高产量倍数。 每个级别增加充能率",
    "Unlock a building (on right of Factory) where you can upgrade prestige/crystal generation. Each level increases generator's effect by": "解锁一座建筑物（在工厂右侧），您可以在其中升级声望/水晶生成。 每级增加发电机的效果",
    "Unlock a building (on right of Factory) where you can upgrade steel production. Each level increases foundry's effect by": "解锁可以升级钢铁生产的建筑物（位于工厂右侧）。 每个级别都会增加铸造厂的效果",
    "Create Rocket Part": "制作火箭零件",
    "Charge": "充能",
    "Craft to ??? Rocket Fuel": "制作 ??? 火箭燃料",
    "Endgame: Level 1400, Tier 100, 47 Grasshop; Level 400 in Anti-Realm": "残局：1400 等级，100 层级，47 草场； 反境界 400级",
    "Gain more Oil based on your tier and AP.": "根据您的等级和 AP 获得更多石油。",
    "Liquefy": "液化",
    "Liquefy resets everything Anonymity as well as your AP, Anonymity upgrades & tier for Oil.": "液化重置一切匿名以及你的 AP、匿名升级和石油等级。",
    "Momentum Upgrades": "动力升级",
    "Next Rocket Fuel:": "下一个火箭燃料：",
    "Oil": "油",
    "Oil Upgrades": "石油升级",
    "Really Grass Cutting Incremental - Prototype v0.3.6 - Made by MrRedShark77": "真正的割草增量 - Prototype v0.3.6 - Made by MrRedShark77",
    "Refinery": "炼油厂",
    "Reset everything liquefy does as well as oil, oil upgrades, steel and total rocket fuel.\n    You will create a rocket part, earn one momentum, and reset the cost to make rocket fuel.\n    You keep rocket fuel and rocket fuel upgrades.": "重置 liquefy 所做的一切以及石油、石油升级、钢铁和总火箭燃料。\n 你将创建一个火箭部件，获得一个动力，并重置制造火箭燃料的成本。\n 你保留火箭燃料和火箭燃料升级 .",
    "Rocket Fuel Upgrade": "火箭燃料升级",
    "Rocket Part": "火箭零件",
    "??? Stars": "??? 星星",
    "Astral": "星界",
    "Automatically update best anonymity/liquefy with current values if they are higher (while decelerated).": "如果当前值较高（减速时），则使用当前值自动更新最佳匿名/液化。\n",
    "Automation Tree": "自动化树",
    "Endgame: Level 2500+, Tier 250+; Level 600+ in Anti-Realm; 15+ Grass-skip": "残局：2500+级，250+级；逆境600级以上； 15+ 跳草",
    "every astral.": "每个星体。",
    "First galactic breaks rocket part's limit.": "第一个银河突破火箭部分的极限。",
    "Fundry": "基金会",
    "Funify": "有趣",
    "Funify!": "有趣！",
    "Gain more Fun based on grass-skip and oil.": "基于草跳和油获得更多乐趣。",
    "Gain more Stars based on rocket parts, starting at 10.": "根据火箭部件获得更多星星，从 10 开始。",
    "Galactic": "银河",
    "Go Galaxy!": "去银河！",
    "Go to Space": "去太空",
    "Grass gain is increased by": "草增益增加",
    "Grass-Skip": "草跳",
    "Grass-skip once to unlock.": "草跳一次解锁。",
    "Grass-Skip!": "草-跳过！",
    "Grass-skipping resets everything liquefy does as well as oil except oil upgrades.": "除油升级外，跳草会重置液化和油的所有功能。",
    "Keep challenges on Grasshop, Galactic.": "继续挑战 草场，银河。",
    "Moonstone Upgrades": "月光石升级",
    "more moonstones per 2 grass-skips (starting at 8).": "每 2 个草跳（从 8 个开始）有更多的月光石。",
    "more platinum and SP. Active sixth 7 grasshop milestones if you haven't reached them.": "更多的铂金和SP。如果您还没有达到它们，则激活第六个 7 个草场里程碑。\n",
    "more SP per grass-skip.": "每个草跳过更多的SP。",
    "more stars per grass-skip.": "每个草跳更多的星星。",
    "Multi-Grasshop:": "批量草场：",
    "per astral.": "每个星体。",
    "Progession Tree": "进展树",
    "Really Grass Cutting Incremental - v0.4.1 - Made by MrRedShark77": "真正的割草增量 - v0.4.1 - 由 MrRedShark77 制作",
    "Reset EVERYTHING except rocket fuel upgrades.": "重置除了火箭燃料升级之外的一切。",
    "Reset everything grass-skip does, but it benefits from the milestones for grass-skip.": "重置草地跳跃所做的一切，但它受益于草地跳跃的里程碑。",
    "SFRGT gain is increased by": "SFRGT 增益增加",
    "Speed Tree": "速度树",
    "Star gain is increased by": "星级增益增加",
    "Stars": "星星",
    "Super Fun Real Good Time Generator": "超级有趣的实时好时光发生器",
    "The Funny Machine": "有趣的机器",
    "Tier requirement is sightly weaker.": "等级要求略弱。",
    "TP gain is increased by": "TP 增益增加",
    "Unlock Funify reset and The Funny Upgrade rocket fuel upgrade.": "解锁 Funify 重置和有趣的升级火箭燃料升级。\n",
    "XP gain is increased by": "XP增益增加",
    "You have grass-skipped": "你已经跳过草了",
    "Your lowest grasshop is": "你最低的草皮是",
    "(on left of Star Chart).": "（星图左侧）。\n",
    "Active sixth 7 grasshop milestones if you haven't reached them.": "如果您还没有达到它们，则激活第六个 7 个草场里程碑。\n",
    "Dark Matter Plant": "暗物质植物",
    "Double": "双倍的",
    "Endgame: Level 4200+, Tier 420+; Level 1300+ in Anti-Realm; 30+ Grass-skip; AGHGS 25+": "残局：4200+级，420+级；反境界1300+级； 30+ 跳草； AGHGS 25+",
    "every grass-skip.": "每个草跳。",
    "every zero grasshop grass-skips.": "每零个蚂蚱草跳。",
    "First sacrifice unlocks new the funny machine upgrade.": "第一次牺牲解锁新的有趣的机器升级。",
    "Gain more Dark Matters based on your stars (starting at 1 Qt) and astral (starting at 45).": "根据你的星星（从 1 Qt 开始）和星界（从 45 开始）获得更多暗物质。",
    "Galactic no longer reset Steelie time.": "银河不再重置 Steelie 时间。\n",
    "Increase Fun gained by": "增加获得的乐趣",
    "Increase SP gained by": "增加SP增益",
    "is": "是",
    "Keep momentum and momentum upgrades on galactic.": "保持银河的动量和动量升级。",
    "lowest grasshop": "最低的蚂蚱",
    "moonstone earned and its chance.": "月光石获得和它的机会。\n",
    "more platinum and SP.": "更多的铂金和SP。",
    "Multi-Gras-skip:": "批量草跳：",
    "OoM sooner per grassskip.": "OoM 越快每个草跳。",
    "Raise SP gain of the": "提高SP增益",
    "Really Grass Cutting Incremental - v0.4.1.3 - Made by MrRedShark77": "真正的割草增量 - v0.4.1.3 - 由 MrRedShark77 制作",
    "Sacrifice": "牺牲",
    "Sacrifice forces a Galactic reset as well as resetting Astral, Stars, Fun, Fun Upgrades (excluding ones in The Funny Machine) and SFRGT to earn Dark Matter.": "牺牲迫使银河重置以及重置 Astral、Stars、Fun、Fun 升级（不包括 The Funny Machine 中的升级）和 SFRGT 以获得暗物质。",
    "SFRGT is increased by": "SFRGT 增加",
    "Steel is increased by": "钢增加",
    "Steelie no longer reset its time.": "Steelie 不再重置时间。",
    "th power.": "权力。",
    "Unlock a new rocket fuel for stars.": "为恒星解锁一种新的火箭燃料。",
    "Unlock milestones below grasshop 0.": "解锁 草场 0 以下的里程碑。\n",
    "Unlock more momentum upgrades, one moonstone upgrade.": "解锁更多动力升级，一个月光石升级。\n",
    "Unlock the": "解锁",
    "You don't lose platinum on galactic.": "你不会在银河系失去铂金。",
    "Your": "您的",
    "Allow grasshopping multiple times. (change in options)\n        ": "允许多次草场。 （选项更改）\n",
    "Autocut value applies to": "自动切割值适用于",
    "Autocut Value Platinum": "自动切割价值白金",
    "Automation Keeper": "自动化守护者",
    "Divide the time to max foundry bonus by": "将达到最大铸造奖金的时间除以",
    "Faster Foundry": "更快的铸造厂",
    "Go to Ground": "去地面",
    "Increase auto cut amount by": "将自动切割量增加",
    "Increase Crystal base from tier from": "从层级增加水晶基础",
    "Increase platinum gain by": "增加铂金收益",
    "Increase Platinum gain by": "增加铂金收益",
    "Increase PP base from level from": "从等级增加PP基础",
    "Increase SP (Space Power) gained by": "增加获得的SP（空间力量）",
    "Increase stars gain by": "增加星星增益",
    "Increase Steel gain by": "增加钢铁增益",
    "Increases charge rate by": "将充电率提高",
    "Keep all automation upgrades on Galactic.": "保留 Galactic 上的所有自动化升级。",
    "Moon Platinum": "月亮铂金",
    "Moon Star": "月亮星星",
    "Moon TP": "月亮TP",
    "Moon XP": "月亮经验值",
    "Multi Grasshop": "批量草场",
    "platinum": "铂",
    "Space Power": "空间力量",
    "Stellar ACS": "恒星 ACS",
    "Stellar Autocut": "恒星自动切割",
    "Stellar Charger": "恒星充电器",
    "Stellar Grass Cap": "恒星草上限",
    "The Factory Automation": "工厂自动化",
    "to": "至",
    "Unlock more upgrades.": "解锁更多升级。",
    "Unlock Steel Generation upgrade at max level.": "在最高级别解锁钢铁一代升级。",
    "You can now automatically buy the Factory upgrades.\n        ": "您现在可以自动购买工厂升级。\n",
    "Increase Oil gain by": "加石油增益",
    "Increase XP multiplier's exponent by": "将 XP 乘数的指数增加",
    "per level, but only in normal realm.": "每级，但仅限于普通领域。",
    "Plat-Exponential XP": "白金指数 XP",
    "Platinum Oil": "白金石油",
    "Progress": "进度",
    "Anti-Grass Upgrades Autobuy": "反草升级自动购买",
    "Crystal Upgrade Autobuy": "水晶升级自动购买",
    "Crystal Upgrades EL": "水晶升级 EL",
    "Crystal Upgrades no longer spend crystal.": "水晶升级不再消耗水晶。",
    "Grass Upgrades EL": "草升级 EL",
    "Grass Upgrades no longer spend grass.": "草升级不再消耗草。",
    "Grow Amount": "增长量",
    "Increase grass grow amount by": "将草的生长量增加",
    "Increase multiplier's base from Tier by": "将乘数的基数从层级增加",
    "Keep perks on Crystallize.": "保持对结晶的好处。",
    "of crystal you would earn on crystallize per second.": "水晶，您将获得每秒结晶。",
    "of PP you would earn on prestige per second.": "PP 你将获得的声望每秒。",
    "Oil Drilling Rig": "石油钻机",
    "Passively generate": "被动生成",
    "Passively generate oil and AP slowly based off your best Liquefy/Anonymity per level. Each level increases charge rate by": "根据每个级别的最佳液化/匿名性，被动地产生石油和 AP。每个级别增加充电率",
    "per level. Starting base is": "每个级别。起始基地是",
    "Perk Autobuy": "天赋自动购买",
    "Perk Save C": "天赋保存 C",
    "Prestige Upgrade Autobuy": "声望升级自动购买",
    "Prestige Upgrades EL": "声望升级 EL",
    "Prestige Upgrades no longer spend PP.": "声望升级不再消耗 PP。",
    "Rocket Launch Pad": "火箭发射台",
    "Tier Base": "等级基础",
    "Unlock a building (on bottom of Factory) where you can convert charge and oil into rocket fuel. Each level increases charge rate by": "解锁一座建筑物（位于工厂底部），您可以在其中将电荷和石油转化为火箭燃料。每个级别增加充电率",
    "Unlock a building (on right of Factory) where you can unscale anything. Each level increases charge rate by": "解锁一座建筑（在工厂右侧），您可以在其中取消缩放任何东西。每个级别增加充电率",
    "Unlock a building (on top of Factory) where you can build a rocket. Each level increases charge rate by": "解锁可以建造火箭的建筑物（位于工厂顶部）。每个级别增加充电率",
    "will no longer have maximum limit.": "将不再有最大限制。",
    "You can now automatically buy Anti-Grass Upgrades.": "您现在可以自动购买防草升级。",
    "You can now automatically buy Crystal Upgrades.": "您现在可以自动购买水晶升级。",
    "You can now automatically buy Perk Upgrades.": "您现在可以自动购买 天赋 升级。",
    "You can now automatically buy Prestige Upgrades.": "您现在可以自动购买声望升级。",
    "Dark Matter Upgrades": "暗物质升级",
    "Multi-Grass-skip:": "批量草跳：",
    "Endgame: Level 4500+, Tier 480+; Level 1400+ in Anti-Realm; 32+ Grass-skip; AGHGS 25+": "残局：4500+级，480+级； 反境界1400+； 32+ 草跳； AGHGS 25+",
    "Really Grass Cutting Incremental - v0.4.2 - Sacrifice Update - Made by MrRedShark77": "真正的割草增量 - v0.4.2 - 牺牲更新 - 由 MrRedShark77 制作",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    ". Unlock perk autobuyer upgrade.": ". 解锁 天赋 自动购买器 升级。",
    "Keep perks on Prestige.": "重置时保留天赋。",
    "You can now automatically buy Grass Upgrades.": "您现在可以自动购买草升级。",
    "Increase Tier's effect base by ": "增加层级的效果基数 ",
    "Boost AP gain by ": "提升AP增益 ",
    "[progress-#": "[进度-#",
    "[auto-#": "[自动-#",
    "[speed-#": "[速度-#",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "\n            ": "\n            ",
    " XP/cut": " 经验/割",
    " SP/cut": " SP/割",
    " TP/cut": " TP/割",
    " multiplier": " 经验乘数",
    " to Grass, XP, TP, PP & Crystal gain.": " 草、XP、TP、PP 和水晶增益。",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) NoQag$/,
    /^([\d\.]+) QtQag$/,
    /^([\d\.]+) Qag$/,
    /^([\d\.]+) DVg$/,
    /^([\d\.]+) SxNog$/,
    /^([\d\.]+) QtNog$/,
    /^([\d\.]+) QaQag$/,
    /^([\d\.]+) UQag$/,
    /^([\d\.]+) OcNog$/,
    /^([\d\.]+) QtOcg$/,
    /^([\d\.]+) TNog$/,
    /^([\d\.]+) DDc$/,
    /^([\d\.]+) TDc$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+) NoOcg$/,
    /^([\d\.]+) QtDc$/,
    /^([\d\.]+) UTg$/,
    /^([\d\.]+) SpVg$/,
    /^([\d\.]+) QtNog$/,
    /^([\d\.]+) SxNog$/,
    /^([\d\.]+) SpTg$/,
    /^([\d\.]+) NoDc$/,
    /^([\d\.]+) OcQag$/,
    /^([\d\.]+) SxQag$/,
    /^([\d\.]+) SxTg$/,
    /^([\d\.]+) SpSxg$/,
    /^([\d\.]+) OcTg PP$/,
    /^([\d\.]+) SpQag PP$/,
    /^([\d\.]+) SpTg PP$/,
    /^([\d\.]+) QtQag PP$/,
    /^([\d\.]+) QaQag PP$/,
    /^([\d\.]+) DQag PP$/,
    /^\+([\d\.]+) QtVg$/,
    /^\+([\d\.]+) QaNog$/,
    /^\+([\d\.]+) SxVg$/,
    /^\+([\d\.]+) SxNog$/,
    /^\+([\d\.]+) Qt$/,
    /^\+([\d\.]+) UDc$/,
    /^\+([\d\.]+) OcSpg$/,
    /^\+([\d\.]+) SpNog$/,
    /^\+([\d\.]+) SxSpg$/,
    /^\+([\d\.]+) Dc$/,
    /^\+([\d\.]+) T$/,
    /^\+([\d\.]+) QaDc$/,
    /^\+([\d\.]+) TDc$/,
    /^\+([\d\.]+) TDc$/,
    /^\+([\d\.]+) Vg$/,
    /^\+([\d\.]+) TQtg$/,
    /^\+([\d\.]+) SxSxg$/,
    /^\(([\d\.]+)\%\)$/,
    /^\(\+([\d\.]+)\/s\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) B PP$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) PP$/,
    /^([\d\.,]+) TP$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+) SP$/,
    /^([\d\.,]+) \/ ([\d\.,]+) XP$/,
    /^([\d\.,]+) \/ ([\d\.,]+) B XP$/,
    /^([\d\.,]+) B \/ ([\d\.,]+) B XP$/,
    /^([\d\.,]+) Dc \/ ([\d\.,]+) UDc$/,
    /^([\d\.,]+) No \/ ([\d\.,]+) UDc$/,
    /^([\d\.,]+) \/ ([\d\.,]+) TP$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) PP$/,
    /^\+([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) Moonstone$/, '你有 $1 个月光石'],
    [/^You have (.+) Moonstone \((.+) platinum grow chance\)$/, '你有 $1 个月光石（$2 铂金成长几率）'],
    [/^You have (.+) Grass$/, '你有 $1 草'],
    [/^You have (.+) Prestige Points$/, '你有 $1 声望点'],
    [/^You have (.+) Platinum$/, '你有 $1 白金'],
    [/^You have (.+) Platinum \((.+)\% grow chance\)$/, '你有 $1 白金 \($2\% 成长率\)'],
    [/^You have (.+) PP$/, '你有 $1 PP'],
    [/^Craft to (.+) Rocket Fuel$/, '制作 $1 火箭燃料'],
    [/^You have (.+) Crystal$/, '你有 $1 水晶'],
    [/^\(\+(.+)\/sec\)$/, '（\+$1\/秒）'],
    [/^Boost XP gain by (.+)x$/, '将 经验值 增益提高 $1x'],
    [/^Boost steel gain by (.+)x$/, '将 钢 增益提高 $1x'],
    [/^Boost TP gain by (.+)x$/, '将 TP 增益提高 $1x'],
    [/^Boost PP gain by (.+)x$/, '将 PP 增益提高 $1x'],
    [/^Boost Crystal gain by (.+)x$/, '将 水晶 增益提高 $1x'],
    [/^Boost grass gain by (.+)x$/, '将 草 增益提高 $1x'],
    [/^You have (.+) Steel$/, '你有 $1 钢'],
    [/^You have (.+) Perk$/, '你有 $1 天赋'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Scaled level starts x(.+) later$/, '缩放级别在 x$1 之后开始'],
    [/^(.+) \/ (.+) TP$/, '$1 \/ $2 TP'],
    [/^(.+) \/ (.+) XP$/, '$1 \/ $2 经验值'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^\(\+([\d\.]+)\/sec\)$/, '（\+$1\/秒）'],
    [/^([\d\.]+) seconds$/, '$1 秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) M Grass$/, '$1 M 草'],
    [/^([\d\.]+) B Grass$/, '$1 B 草'],
    [/^([\d\.]+) M Stars$/, '$1 M 星星'],
    [/^([\d\.]+) T Stars$/, '$1 T 星星'],
    [/^([\d\.]+) Qa Stars$/, '$1 Qa 星星'],
    [/^([\d\.]+) B Stars$/, '$1 B 星星'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Reach Level ([\d\.,]+).$/, '达到等级 $1。'],
    [/^\+([\d\.,]+) later$/, '\+$1 之后'],
    [/^([\d\.,]+) Perk$/, '$1 天赋'],
    [/^([\d\.,]+) Grass-skip$/, '$1 草跳'],
    [/^([\d\.,]+) Moonstone$/, '$1 月光石'],
    [/^([\d\.,]+) Platinum$/, '$1 白金'],
    [/^([\d\.,]+) M Platinum$/, '$1 M 白金'],
    [/^([\d\.,]+) Grass$/, '$1 草'],
    [/^([\d\.,]+) Grasshop$/, '$1 草场'],
    [/^([\d\.,]+) Stars$/, '$1 星星'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Grasshop and ([\d\.,]+) Grass\-skip$/, '$1 草场 和 $2 草跳'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost to next 25: (.+) PP$/, '到下一个 25 的成本：$1 PP'],
    [/^Cost to next 25: (.+) Stars$/, '到下一个 25 的成本：$1 星星'],
    [/^Cost to next 25: (.+) Moonstone$/, '到下一个 25 的成本：$1 月光石'],
    [/^Cost to next 25: (.+) Steel$/, '到下一个 25 的成本：$1 钢'],
    [/^Cost to next 25: (.+) Crystal$/, '到下一个 25 的成本：$1 水晶'],
    [/^Cost to next 25: (.+) Platinum$/, '到下一个 25 的成本：$1 白金'],
    [/^Cost to next 25: (.+) Perk$/, '到下一个 25 的成本：$1 天赋'],
    [/^Cost to next 25: (.+) Grass$/, '到下一个 25 的成本：$1 草'],
    [/^Goal: Level (.+)$/, '目标：等级 $1'],
    [/^Goal: Tier (.+)$/, '目标：层级 $1'],
    [/^Cost: (.+) Stars$/, '成本：$1 星星'],
    [/^Cost: (.+) Moonstone$/, '成本：$1 月光石'],
    [/^Cost: (.+) Steel$/, '成本：$1 钢'],
    [/^Cost: (.+) Crystal$/, '成本：$1 水晶'],
    [/^Cost: (.+) Grass$/, '成本：$1 草'],
    [/^Cost: (.+) Perk$/, '成本：$1 天赋'],
    [/^Cost: (.+) PP$/, '成本：$1 PP'],
    [/^Cost: (.+) Platinum$/, '成本：$1 白金'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^(.+) Grass$/, '$1 草'],
    [/^(.+) Crystal$/, '$1 水晶'],
    [/^Steel Steel$/, '钢 钢'],
    [/^(.+) Steel$/, '$1 钢'],
    [/^(.+) → (.+)$/, '$1 → $2'],

]);