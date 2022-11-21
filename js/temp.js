var tmp = {}
var tmp_update = []

function resetTemp() {
    keep = []
    tmp = {
        space: false,

        sc_tab: 'auto',
        sc_choosed: [null,null],

        spawn_time: 0,
        rangeCut: 50,
        autocut: 5,
        autocutTime: 0,
        autocutAmt: 1,
        spawnAmt: 1,

        platChance: 0.005,
        platGain: 1,

        moonstoneGain: 1,
        moonstoneChance: 0.005,

        grasses: [],
        level: {},
        tier: {},
        astral: {},

        upgs: {},
        upg_res: {},
        upg_ch: {},

        chal: {
            bulk: 0,
            amt: 0,
            goal: [],
            eff: [],
        },

        chargeEff: [],

        perkUnspent: 0,
        perks: 0,

        ghRunning: false,
        ghEffect: [],

        aghEffect: [],
        gsEffect: [],

        star_chart: {
            auto: {
                max: [],
                cost: [],
                bulk: [],
                eff: [],
            },
            speed: {
                max: [],
                cost: [],
                bulk: [],
                eff: [],
            },
            progress: {
                max: [],
                cost: [],
                bulk: [],
                eff: [],
            },
        },

        sc_unl: {
            auto: [],
            speed: [],
            progress: [],
        },

        sc_afford: {
            auto: [],
            speed: [],
            progress: [],
        },

        astral_eff: {},
    }

    for (let x in UPG_RES) tmp.upg_res[x] = E(0)

    for (let x in UPGS) {
        tmp.upg_ch[x] = -1
        tmp.upgs[x] = {
            unlLength: 0,
            max: [],
            cost: [],
            bulk: [],
            eff: [],
        }
    }
}

function updateTemp() {
    tmp.oilRigBase = (player.upgs.factory[7]||0)/100
    for (let x = 0; x < tmp_update.length; x++) tmp_update[x]()
}