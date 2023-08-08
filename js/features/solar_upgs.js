const SOLAR_UPGS = [
    {
        title: "Automation Upgrades",
        tab: ['Icons/Assemblerv2'],
        res: "ss",

        require() { return player.sn.times >= 2 },
        req_txt: `SN 2`,

        ctn: [
            {
                max: 20,
                title: "Free GH",
                desc: `Raise free grasshops by <b class="green">4</b> per level.`,
                icon: ['Icons/Grasshop2'],     
                cost: i => Decimal.pow(1.2,i).mul(2),
                bulk: i => i.div(2).log(1.2).floor().toNumber()+1,
                effect(i) {
                    let x = i * 4
                        
                    return x
                },
                effDesc: x => +format(x,0),
            },{
                max: 20,
                title: "Free GS",
                desc: `Raise free grass-skips by <b class="green">4</b> per level. This upgrade affects AGH.`,
                icon: ['Icons/GrassSkip'],     
                cost: i => Decimal.pow(1.2,i).mul(2),
                bulk: i => i.div(2).log(1.2).floor().toNumber()+1,
                effect(i) {
                    let x = i * 4
                        
                    return x
                },
                effDesc: x => format(x,0),
            },{
                max: 25,
                title: "Starting AGH",
                desc: `Raise starting AGH milestone.`,
                icon: ['Icons/Grasshop3'],     
                cost: i => Decimal.pow(1.2,i).mul(2),
                bulk: i => i.div(2).log(1.2).floor().toNumber()+1,
                effect(i) {
                    let x = 40 - i * 4
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy() { player.lowGH = Math.min(player.lowGH, solarUpgEffect(0,2,0)) },
            },{
                title: "Starting Momentum",
                desc: `Start with momentum upgrades with a base cost of <b class="green">1</b>.`,
                icon: ['Curr/Momentum'],
                cost: i => 1,
                onBuy: startMomentum,
            },{
                title: "Planetary Jump",
                desc: `Automatically update grass jump and planetary tier without reset.`,
                icon: ['Icons/PlanetJump'],
                cost: i => 10,
            },{
                max: 10,
                title: "Starting Astral Prestige",
                desc: `Raise starting astral prestige by <b class="green">1</b> per level.`,
                icon: ['Icons/AstralPrestige'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(3,i**1.25).mul(30),
                bulk: i => i.div(30).log(3).root(1.25).floor().toNumber()+1,
                effect(i) {
                    let x = i
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy() {
                    let e = solarUpgEffect(0,5,0)
                    if (player.astralPrestige < e) {player.astralPrestige = e; player.sp = E(0); player.astral = 0}
                },
            },{
                max: 20,
                title: "Starting PT",
                desc: `Raise starting planetary tier.`,
                icon: ['Curr/Planet'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(1.2,i).mul(20),
                bulk: i => i.div(20).log(1.2).floor().toNumber()+1,
                effect(i) {
                    let x = 2 * i
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy() { player.planetoid.planetTier = Math.max(player.planetoid.planetTier, solarUpgEffect(0,6,0)) },
            },{
                max: 12,
                title: "Starting Star Chart",
                desc: `Start with star chart upgrades below base cost.`,
                icon: ['Curr/Star'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(1.2,i).mul(20),
                bulk: i => i.div(20).log(1.2).floor().toNumber()+1,
                effect(i) {
                    if (i == 0) return E(0)

                    let x = Decimal.pow(1e3,i)
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy: startStarChart,
            },{
                max: 10,
                title: "Starting Reservatory",
                desc: `Start with reservatory upgrades below base cost.`,
                icon: ['Curr/Res4'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(1.2,i).mul(20),
                bulk: i => i.div(20).log(1.2).floor().toNumber()+1,
                effect(i) {
                    if (i == 0) return E(0)

                    let x = Decimal.pow(1e3,i)
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy: startStarChart,
            },{
                max: 15,
                title: "Starting Reservatory",
                desc: `Start with ring upgrades below base cost.`,
                icon: ['Curr/Ring'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(1.2,i).mul(20),
                bulk: i => i.div(20).log(1.2).floor().toNumber()+1,
                effect(i) {
                    if (i == 0) return E(0)
                    
                    let x = Decimal.pow(1e5,i)
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy: startStarChart,
            },{
                max: 20,
                title: "Starting GJ",
                desc: `Raise starting grass jump.`,
                icon: ['Icons/GrassJump'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(1.2,i).mul(50),
                bulk: i => i.div(50).log(1.2).floor().toNumber()+1,
                effect(i) {
                    let x = 2 * i
                        
                    return x
                },
                effDesc: x => format(x,0),
                onBuy() { player.grassjump = Math.max(player.grassjump, solarUpgEffect(0,10,0)) },
            },
        ],
    },{
        title: "Basic Upgrades",
        tab: ['Curr/Prestige','#159edd'],
        res: "ss",

        ctn: [
            {
                max: 1000,
                title: "Solar Powered Grass",
                get desc() {return `Increase grass value by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Grass'],     
                cost: i => Decimal.pow(3,i),
                bulk: i => i.log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Prestige",
                get desc() {return `Increase prestige points gain by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Prestige'],                 
                cost: i => Decimal.pow(3,i),
                bulk: i => i.log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Crystals",
                get desc() {return `Increase crystals gain by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Crystal'],                 
                cost: i => Decimal.pow(3,i).mul(2),
                bulk: i => i.div(2).log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Steel",
                get desc() {return `Increase steel gain by <b class="green">${formatMult(1e10)}</b> per squared level.`},
                icon: ['Curr/Steel2'],                 
                cost: i => Decimal.pow(3,i).mul(3),
                bulk: i => i.div(3).log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e10,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Powered Lines",
                get desc() {return `Increase lines gain by <b class="green">${formatMult(1e3)}</b> per level.`},
                icon: ['Curr/Lines'],                 
                cost: i => Decimal.pow(3,i).mul(3),
                bulk: i => i.div(3).log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e3,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered",
                get desc() {return `Increase charge rate by <b class="green">${formatMult(1e10)}</b> per squared level.`},
                icon: ['Curr/Charge'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(3.5,i).mul(10),
                bulk: i => i.div(10).log(3.5).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e10,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Anonymity",
                get desc() {return `Increase anonymity points gain by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Anonymity'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(3.5,i).mul(10),
                bulk: i => i.div(10).log(3.5).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Oil",
                get desc() {return `Increase oil gain by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Oil'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(3.5,i).mul(10),
                bulk: i => i.div(10).log(3.5).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Fun",
                get desc() {return `Increase fun gain by <b class="green">${formatMult(1e10)}</b> per squared level.`},
                icon: ['Curr/Fun'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                cost: i => Decimal.pow(3.5,i).mul(10),
                bulk: i => i.div(10).log(3.5).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e10,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Powered Arcs",
                get desc() {return `Increase arcs gain by <b class="green">${formatMult(100)}</b> per level.`},
                icon: ['Curr/Arcs'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,    
                cost: i => Decimal.pow(3.5,i).mul(10),
                bulk: i => i.div(10).log(3.5).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(100,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered II",
                get desc() {return `Increase charge rate by <b class="green">${formatMult(1000)}</b> per level.`},
                icon: ['Curr/DarkCharge'],
                require() { return player.sn.tier.gte(3) },
                req_txt: `T3`,
                cost: i => Decimal.pow(4,i).mul(500),
                bulk: i => i.div(500).log(4).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e3,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Normality",
                get desc() {return `Increase normality points gain by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Normality'],
                require() { return player.sn.tier.gte(3) },
                req_txt: `T3`,
                cost: i => Decimal.pow(4,i).mul(500),
                bulk: i => i.div(500).log(4).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Powered Cloud",
                get desc() {return `Increase cloud generated by <b class="green">${formatMult(1e100)}</b> per squared level.`},
                icon: ['Curr/Cloud'],
                require() { return player.sn.tier.gte(3) },
                req_txt: `T3`,
                cost: i => Decimal.pow(4,i).mul(500),
                bulk: i => i.div(500).log(4).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1e100,i**2)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },
        ],
    },{
        title: "Advanced Upgrades",
        tab: ['Curr/DarkMatter','#305'],
        res: "ss",

        ctn: [
            {
                max: 100,

                title: "Solar Flare Capacity",
                desc: `Double solar flare's capacity.`,
                icon: ['Curr/SolarFlare'],
                cost: i => Decimal.pow(3,i).mul(2),
                bulk: i => i.div(2).log(3).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(2,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                title: "Orbit",
                desc: `Planets boost planetarium.`,
                icon: ['Curr/Planet'],
                cost: i => 3,
                effect(i) {
                    let x = player.planetoid.planet.add(1).overflow(1e300,0.5)
                        
                    return x
                },
                effDesc: x => formatMult(x)+x.softcapHTML(1e300),
            },{
                title: "Constant RF",
                desc: `Rocket fuel generation is permanently enabled and based on oil/charge generated per second, it requires oil drilling rig. The base of rocket fuel's requirement no longer increased by rocket parts, however, rocket part's requirement is changed.`,
                icon: ['Curr/RocketFuel'],
                cost: i => 3,
            },{
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`, 
                title: "Prism",
                desc: `Unlock the Prism constellation that acts like an all in one constellation for generation and boosts.`,
                icon: ['Icons/PrismIcon'],
                cost: i => 100,
            },{
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`, 
                title: "Lunar Powered",
                desc: `Lunar powers will level up without needing to be active.`,
                icon: ['Curr/Lunar'],
                cost: i => 100,
            },
        ],
    },{
        title: "Filler Upgrades",
        tab: ['Curr/SolarShard','yellow'],
        res: "ss",

        require() { return player.sn.times >= 2 },
        req_txt: `SN 2`,

        ctn: [
            {
                max: 1000,
                title: "Solar Stardust",
                desc: `Increase stardust generated by <b class="green">+10%</b> per level.`,
                icon: ['Curr/Stardust'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i/10
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Platinum",
                desc: `Increase platinum gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Platinum'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x,0),
            },{
                max: 1000,
                title: "Solar Moonstone",
                desc: `Increase moonstone gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/MoonStone'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x,0),
            },{
                max: 1000,
                title: "Solar Stars",
                desc: `Increase stars gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Star'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x,0),
            },{
                max: 1000,
                title: "Solar Flares",
                desc: `Increase solar flares generated by <b class="green">+20%</b> per level.`,
                icon: ['Curr/SolarFlare'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i/5
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Planetarium",
                desc: `Increase planetarium gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Planetoid'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 3,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Observatorium",
                desc: `Increase observatorium gain by <b class="green">+25%</b> per level.`,
                icon: ['Curr/Observatorium'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 3,
                effect(i) {
                    let x = 1+i/4
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Astro",
                desc: `Increase astro gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Astrolabe'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 3,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Measure",
                desc: `Increase measure gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Measure'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 3,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Planets",
                desc: `Increase planets gain by <b class="green">+100%</b> per level.`,
                icon: ['Curr/Planet'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 3,
                effect(i) {
                    let x = 1+i
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },
        ],
    },{
        title: "Solar Flare Upgrades",
        tab: ['Curr/SolarFlare','orange'],
        res: "sf",

        ctn: [
            {
                max: 25,
                title: "Super Star",
                desc: `Increase star grow speed per supernova (based on level).`,
                icon: ['Curr/StarGrow'],
                cost: i => Decimal.pow(1.5,i).mul(100),
                bulk: i => i.div(100).log(1.5).floor().toNumber()+1,
                effect(i) {
                    if (i == 0) return 1;

                    let x = Decimal.pow(1.15,i-1).mul(0.15*player.sn.times).add(1)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Supercharged",
                desc: `Increase charge rate by <b class="green">+200%</b> compounding per level.`,
                icon: ['Curr/Charge'],
                cost: i => Decimal.pow(1.35,i).mul(500),
                bulk: i => i.div(500).log(1.35).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(3,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Superpower",
                desc: `Increase lunar power rate by <b class="green">+25%</b> per level.`,
                icon: ['Curr/Lunar'],
                costOnce: true,
                cost: i => 250,
                effect(i) {
                    let x = i/4+1
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 100,
                title: "Solar Shards",
                desc: `Increase solar shards gain by <b class="green">+10%</b> per level.`,
                icon: ['Curr/SolarShard'],
                cost: i => Decimal.pow(1.15,i).mul(500),
                bulk: i => i.div(500).log(1.15).floor().toNumber()+1,
                effect(i) {
                    let x = i/10+1
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                title: "The Solar Idler",
                desc: `Generate best solar shards. This upgrade triggers everyday.`,
                icon: ['Curr/SolarShard','Icons/Automation'],
                cost: i => 100,
            },{
                max: 25,
                title: "Solar Powered Lines II",
                desc: `Increase lines generated by <b class="green">+50%</b> compounding per level.`,
                icon: ['Curr/Lines'],
                cost: i => Decimal.pow(1.65,i).mul(300),
                bulk: i => i.div(300).log(1.65).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1.5,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 25,
                title: "Solar Powered Arcs II",
                desc: `Increase arcs generated by <b class="green">+50%</b> compounding per level.`,
                icon: ['Curr/Arcs'],
                cost: i => Decimal.pow(1.65,i).mul(600),
                bulk: i => i.div(600).log(1.65).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(1.5,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 25,
                title: "Supercharged Dark",
                desc: `Increase dark charge rate by <b class="green">+100%</b> compounding per level.`,
                icon: ['Curr/DarkCharge'],
                cost: i => Decimal.pow(1.75,i).mul(1e3),
                bulk: i => i.div(1e3).log(1.75).floor().toNumber()+1,
                effect(i) {
                    let x = Decimal.pow(2,i)
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Stardust II",
                desc: `Increase stardust generated by <b class="green">+10%</b> per level.`,
                icon: ['Curr/Stardust'],
                costOnce: true,
                cost: i => 300,
                effect(i) {
                    let x = i/10+1
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Observatorium II",
                desc: `Increase observatorium gain by <b class="green">+25%</b> per level.`,
                icon: ['Curr/Observatorium'],
                costOnce: true,
                cost: i => 200,
                effect(i) {
                    let x = i/4+1
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar XP",
                desc: `Increase the exponent of XP by <b class="green">+0.1%</b> per level.`,
                icon: ['Icons/XP','Icons/Exponent'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 1e4,
                effect(i) {
                    let x = i/1e3+1
                        
                    return x
                },
                effDesc: x => "^"+format(x,3),
            },{
                max: 1000,
                title: "Solar TP",
                desc: `Increase the exponent of TP by <b class="green">+0.1%</b> per level.`,
                icon: ['Icons/TP','Icons/Exponent'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 1e4,
                effect(i) {
                    let x = i/1e3+1
                        
                    return x
                },
                effDesc: x => "^"+format(x,3),
            },{
                max: 1000,
                title: "Solar SP",
                desc: `Increase the exponent of SP by <b class="green">+0.1%</b> per level.`,
                icon: ['Icons/SP','Icons/Exponent'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 1e4,
                effect(i) {
                    let x = i/1e3+1
                        
                    return x
                },
                effDesc: x => "^"+format(x,3),
            },{
                max: 1000,
                title: "Solar Cosmic",
                desc: `Increase the exponent of Cosmic by <b class="green">+0.1%</b> per level.`,
                icon: ['Icons/XP2','Icons/Exponent'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 1e4,
                effect(i) {
                    let x = i/1e3+1
                        
                    return x
                },
                effDesc: x => "^"+format(x,3),
            },{
                max: 100,
                title: "Solar Rays",
                desc: `Increase solar rays gain by <b class="green">+1%</b> per level.`,
                icon: ['Icons/SR'],
                require() { return player.sn.tier.gte(2) },
                req_txt: `T2`,
                costOnce: true,
                cost: i => 1e5,
                effect(i) {
                    let x = i/100+1
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },
        ],
    },{
        title: "Remnant Upgrades",
        tab: ['Curr/Remnant','black'],
        res: "remnant",

        require() { return player.sn.tier.gte(2) },
        req_txt: `T2`,

        ctn: [
            {
                max: 1000,
                title: "Solar Flare Remnants",
                desc: `Increase solar flares generated by <b class="green">+20%</b> per level.`,
                icon: ['Curr/SolarFlare'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i/5
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Solar Shard Remnants",
                desc: `Increase solar shards gain by <b class="green">+5%</b> per level.`,
                icon: ['Curr/SolarShard'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i/20
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },{
                max: 1000,
                title: "Star Growth Remnants",
                desc: `Increase star grow speed by <b class="green">+10%</b> per level.`,
                icon: ['Curr/StarGrow'],
                costOnce: true,
                cost: i => 1,
                effect(i) {
                    let x = 1+i/10
                        
                    return x
                },
                effDesc: x => formatMult(x),
            },
        ],
    },
]

for (let x of SOLAR_UPGS) for (let y of x.ctn) y.max = y.max ?? 1

/*
{
    title: "Placeholder",
    desc: `Placeholder.`,
    icon: ['Icons/Placeholder'],
    require() { return player.sn.times >= 2 },
    req_txt: `SN 2`,
    cost: i => EINF,
    bulk: i => 1,
    effect(i) {
        let x = E(1)
            
        return x
    },
    effDesc: x => formatMult(x),
},
*/

const SU_RES = {
    ss: {
        name: "Solar Shard",

        base: "Bases/SupernovaBase",
        icon: "Curr/SolarShard",

        get amount() { return player.sn.solarShard },
        set amount(v) { player.sn.solarShard = v },

        get html() { return `Solar Shards: ${this.amount.format(0)}`+(hasSolarUpgrade(4,4) ? `<br>(+${player.sn.bestSSEarn.format(0)} in ${formatTime(86400-player.sn.triggerTime,0)})` : "") },
    },
    sf: {
        name: "Solar Flare",

        base: "Bases/SupernovaBase",
        icon: "Curr/SolarFlare",

        get amount() { return player.sn.solarFlare },
        set amount(v) { player.sn.solarFlare = v },

        get html() { return `Solar Flares: ${this.amount.format(0)} / ${tmp.maxSolarFlare.format(0)}<br>${this.amount.formatGain(tmp.flareGain)}` },
    },
    remnant: {
        name: "Remnants",

        base: "Bases/UnstableBase",
        icon: "Curr/Remnant",

        get amount() { return player.sn.remnant },
        set amount(v) { player.sn.remnant = v },

        get html() { return `Remnants: ${this.amount.format(0)}<br>Eclipse ${player.sn.eclipse.format(0)} | Solar Rays: ${player.sn.sr.sub(SUPERNOVA.eclipse.req(1)).max(0).format(0)} / ${SUPERNOVA.eclipse.require.format(0)}` },
    },
}

var solar_tab = 1
var solar_upg = [null,null]

function solarTab(i) {
    let t = SOLAR_UPGS[i]
    if (!t.require || t.require()) solar_tab = i
}

function chooseSolarUpg(i,x) {
    let t = SOLAR_UPGS[i].ctn[x]
    if (!t.require || t.require()) solar_upg = [i,x]
}

function hasSolarUpgrade(id,x) { return player.sn.solarUpgs[id][x] ?? 0 > 0 }
function solarUpgEffect(id,x,def=1) { return tmp.solar_upgs_effect[id][x] ?? def }

el.setup.solar_upgs = () => {
    let h1 = '', h2 = ''

    for (let i in SOLAR_UPGS) {
        t = SOLAR_UPGS[i]
        h1 += `
        <button id="solar-tab${i}" class="solar-tab-btn" style="background: ${t.tab[1] ?? "lightgray"}" onclick="solarTab(${i})">
            <div class="stb-img-icon" style="background-image: url(images/${t.tab[0]}.png)"></div>
            <div class="stb-img-locked">${t.req_txt ?? "???"}</div>
        </button>`

        h2 += `<div id="solar-upgs${i}-div">[${i}] <h2>${t.title}</h2><div class="table_left">`

        const r = SU_RES[t.res]

        for (let x in t.ctn) {
            const u = t.ctn[x]

            let icon = [r.base]
            if (u.icon) icon.push(...u.icon)
            else icon.push('Icons/Placeholder')

            let h = ""

            h += `
            <div class="solar_upg_ctn locked" id="solar_upg_${i}_${x}" onclick="chooseSolarUpg(${i},${x})">`
            for (ic in icon) h += `<img class="img_desc" draggable="false" src="${"images/"+icon[ic]+".png"}">`
            h += `<img class="img_res" draggable="false" src="${"images/"+r.base+".png"}"><img class="img_res" draggable="false" src="${"images/"+r.icon+".png"}">`
            h += `<img class="img_lock" draggable="false" src="images/Icons/Lock.png">`
            
            h += `
                <div id="solar_upg_${i}_${x}_cost" class="su_cost">???</div>
                <div id="solar_upg_${i}_${x}_amt" class="su_amt">0</div>
                <div id="solar_upg_${i}_${x}_req" class="su_req">${u.req_txt ?? "???"}</div>
            </div>
            `

            h2 += `
            <div class="solar_upg_div">
                ${h}
            </div>
            `
        }

        h2 += "</div></div>"
    }

    new Element("solar_tabs").setHTML(h1)
    new Element("solar_upgs_table").setHTML(h2)
}

el.update.solar_upgs = () => {
    tmp.el.solar_upgs_res.setHTML(SU_RES[SOLAR_UPGS[solar_tab].res].html)

    tmp.el.su_desc_div.setDisplay(solar_upg[0] !== null)
    if (solar_upg[0] !== null) {
        let [id, i] = solar_upg
        const su = SOLAR_UPGS[id]
        const u = su.ctn[i]
        let amt = player.sn.solarUpgs[id][i]??0
        let res = SU_RES[su.res]

        tmp.el.su_title.setHTML(`[${id}-#${i}] <h3>${u.title}</h3>`)

        let h = ''

        if (u.max > 1) h += `Level <b class="yellow">${format(amt,0)}${u.max < Infinity ? ` / ${format(u.max,0)}` : ""}</b><br>`
        
        h += `
        ${u.desc}
        `

        if (u.effDesc) h += '<br>Effect: <span class="cyan">'+u.effDesc(tmp.solar_upgs_effect[id][i])+"</span>" + (amt < u.max && u.max > 1 ? " ➜ <span class='cyan'>"+u.effDesc(u.effect(amt+1))+"</span>" : "")

        if (amt < u.max) {
            let cost = u.cost(amt)
            let m = Math.min(25,u.max-Math.floor(amt/25)*25)
            let cost2 = u.costOnce?Decimal.mul(cost,m-amt%m):u.cost((Math.floor(amt/m)+1)*m-1)//upg.cost(amt+25)
            
            if (u.max > 1) h += `<br><span class="${Decimal.gte(res.amount,cost2)?"green":"red"}">Cost to next 25: ${format(cost2,0)} ${res.name}</span>`
            
            h += `<br><span class="${Decimal.gte(res.amount,cost)?"green":"red"}">Cost: ${format(cost,0)} ${res.name}</span>`
        }

        tmp.el.su_desc.setHTML(h)
    }

    for (let i in SOLAR_UPGS) {
        i = parseInt(i)
        let t = SOLAR_UPGS[i]

        tmp.el['solar-tab'+i].setClasses({"solar-tab-btn": true, locked: t.require && !t.require()})
        tmp.el['solar-upgs'+i+"-div"].setDisplay(solar_tab == i)
        if (solar_tab == i) {
            for (let x in t.ctn) {
                x = parseInt(x)

                const u = t.ctn[x]
                const id = `solar_upg_${i}_${x}`

                const req = !u.require || u.require()

                tmp.el[id].setClasses({solar_upg_ctn: true, locked: !req, choosed: solar_upg[0] == i && solar_upg[1] == x})

                if (req) {
                    let amt = player.sn.solarUpgs[i][x]??0, cost = u.cost(amt), res = SU_RES[t.res]

                    tmp.el[id+"_amt"].setTxt(format(amt,0))
                    tmp.el[id+"_cost"].setTxt(amt < u.max ? format(cost,0,6) : "Maxed") // +" "+resDisplay
                    tmp.el[id+"_cost"].setClasses({su_cost: true, locked: res.amount.lt(cost) && amt < u.max})
                }
            }
        }
    }
}

function buySolarUpgrade(id,x) {
    const su = SOLAR_UPGS[id], u = su.ctn[x]
    const res = SU_RES[su.res]
    let amt = player.sn.solarUpgs[id]

    if ((amt[x]??0) >= u.max) return

    let cost = u.cost(amt[x])

    if (Decimal.gte(res.amount,cost)) {
        res.amount = res.amount.sub(cost).max(0)
        amt[x] = amt[x] ? amt[x] + 1 : 1
        updateSolarUpgradesTemp(id)
        if (u.onBuy) u.onBuy()
    }
}

function buyNextSolarUpgrade(id,x) {
	const su = SOLAR_UPGS[id], u = su.ctn[x]
    const res = SU_RES[su.res]
    let amt = player.sn.solarUpgs[id], amt2 = amt[x] ?? 0

    if (amt2 >= u.max) return

    let cost = u.cost(amt2)

	if (Decimal.gte(res.amount,cost)) {
		let bulk = u.max > 1 ? u.costOnce ? Math.min(Math.floor(res.amount / cost), 25 - amt2 % 25) : Math.min(u.bulk(res.amount), Math.ceil((amt2 + 1) / 25) * 25) : 1

		if (bulk > (u.costOnce ? 0 : amt2)) {
            console.log(bulk)

			amt[x] = Math.min(u.costOnce ? bulk + amt2 : Math.max(amt2,bulk),u.max)

            res.amount = res.amount.sub(u.costOnce ? Decimal.mul(cost,amt[x] - amt2) : u.cost(bulk-1)).max(0)

            updateSolarUpgradesTemp(id)

            if (u.onBuy) u.onBuy()
		}
	}
}

function buyMaxSolarUpgrade(id,x) {
    const su = SOLAR_UPGS[id], u = su.ctn[x]
    const res = SU_RES[su.res]
    let amt = player.sn.solarUpgs[id], amt2 = amt[x] ?? 0

    if (amt2 >= u.max) return

    let cost = u.cost(amt2)

	if (Decimal.gte(res.amount,cost)) {
		let bulk = u.max > 1 ? u.costOnce ? Math.floor(res.amount / cost) : u.bulk(res.amount) : 1

		if (bulk > (u.costOnce ? 0 : amt2)) {
			amt[x] = Math.min(u.costOnce ? bulk + amt2 : Math.max(amt2,bulk),u.max)

            res.amount = res.amount.sub(u.costOnce ? Decimal.mul(cost,amt[x] - amt2) : u.cost(bulk-1)).max(0)

            updateSolarUpgradesTemp(id)

            if (u.onBuy) u.onBuy()
		}
	}
}

function updateSolarUpgradesTemp(id) {
    const su = SOLAR_UPGS[id];
    for (let i = 0; i < su.ctn.length; i++) {
        const u = su.ctn[i]
        if (u.effect) tmp.solar_upgs_effect[id][i] = u.effect(player.sn.solarUpgs[id][i] ?? 0)
    }
}

tmp_update.push(()=>{
    for (let id in SOLAR_UPGS) updateSolarUpgradesTemp(id)
})