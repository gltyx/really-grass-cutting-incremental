const G_SIZE = 15
const G_RANGE = 50

var mouse_pos = {x:0,y:0}
var range_pos = {x:0,y:0}
var mouse_in = false

function createGrass() {
    if (tmp.grasses.length < tmp.grassCap) {
        let pl = Math.random()<tmp.platChance&&player.tier>=3
        let ms = Math.random()<tmp.moonstoneChance&&pl&&player.gTimes>0

        tmp.grasses.push({
            x: Math.random(),
            y: Math.random(),
            pl: pl,
            ms: ms,
        })
    }
}

function removeGrass(i,auto=false) {
    let tg = tmp.grasses[i]
    if (!tg) return

    let y = 1
    if (auto) y *= tmp.autocutBonus

    if (player.decel) player.aGrass = player.aGrass.add(tmp.grassGain.mul(y))
    else player.grass = player.grass.add(tmp.grassGain.mul(y))
    player.xp = player.xp.add(tmp.XPGain.mul(y))
    if (player.pTimes > 0) player.tp = player.tp.add(tmp.TPGain.mul(y))
    if (player.gTimes > 0) player.sp = player.sp.add(tmp.SPGain)

    if (tg.pl) player.plat += tmp.platGain * (tmp.platCutAmt ? y : 1)
    if (tg.ms) player.moonstone += tmp.moonstoneGain * (tmp.moonstonesCutAmt ? y : 1)

    tmp.grasses.splice(i, 1)
}

el.update.grassCanvas = _=>{
    if (mapID == 'g') {
        if (grass_canvas.width == 0 || grass_canvas.height == 0) resizeCanvas()
        drawGrass()

        tmp.el.grass_cap.setHTML(`${format(tmp.grasses.length,0)} / ${format(tmp.grassCap,0)} <span class="smallAmt">(+${format(1/tmp.grassSpawn*tmp.spawnAmt)}/s)</span>`)
        tmp.el.grass_cut.setHTML("+"+format(tmp.grassGain,1)+'<span class="smallAmt">/cut</span>')
    }
}

function resetGlasses() {
    tmp.grasses = []
    tmp.spawn_time = 0
}

function drawGrass() {
	if (!retrieveCanvasData()) return;
	grass_ctx.clearRect(0, 0, grass_canvas.width, grass_canvas.height);
    let gs = tmp.grasses

    if (mouse_in) {
        grass_ctx.fillStyle = "#34AF7C77"

        grass_ctx.fillRect(range_pos.x,range_pos.y,tmp.rangeCut,tmp.rangeCut)
    }

    grass_ctx.strokeStyle = "black"

    for (let i = 0; i < gs.length; i++) {
        let g = gs[i]

        if (g) {
            grass_ctx.fillStyle = g.pl?g.ms?'#008DFF':"#DDD":"#00AF00"

            let [x,y] = [Math.min(grass_canvas.width*g.x,grass_canvas.width-G_SIZE),Math.min(grass_canvas.height*g.y,grass_canvas.height-G_SIZE)]

            if (mouse_in) {
                if (range_pos.x < x + G_SIZE &&
                    range_pos.x + tmp.rangeCut > x &&
                    range_pos.y < y + G_SIZE &&
                    tmp.rangeCut + range_pos.y > y) {
                        removeGrass(i)
                        i--
        
                        continue
                    }
            }

            grass_ctx.fillRect(x,y,G_SIZE,G_SIZE)
            grass_ctx.strokeRect(x,y,G_SIZE,G_SIZE)
        }
    }
}

function grassCanvas() {
    if (!retrieveCanvasData()) return
    if (grass_canvas && grass_ctx) {
        window.addEventListener("resize", resizeCanvas)

        grass_canvas.width = grass_canvas.clientWidth
        grass_canvas.height = grass_canvas.clientHeight

        grass_canvas.addEventListener('mousemove', (event)=>{
            mouse_in = true
            mouse_pos.x = event.pageX - grass_rect.left
            mouse_pos.y = event.pageY - grass_rect.top

            range_pos.x = mouse_pos.x - tmp.rangeCut/2
            range_pos.y = mouse_pos.y - tmp.rangeCut/2
        })

        grass_canvas.addEventListener('mouseout', (event)=>{
            mouse_in = false
        })
    }
}