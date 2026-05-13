import * as THREE from 'three'

import Loader from './Utils/Loader.js'
import EventEmitter from './Utils/EventEmitter.js'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: './models/matcaps/beige.png', type: 'texture' },
            { name: 'matcapBlack', source: './models/matcaps/black.png', type: 'texture' },
            { name: 'matcapOrange', source: './models/matcaps/orange.png', type: 'texture' },
            { name: 'matcapRed', source: './models/matcaps/red.png', type: 'texture' },
            { name: 'matcapWhite', source: './models/matcaps/white.png', type: 'texture' },
            { name: 'matcapGreen', source: './models/matcaps/green.png', type: 'texture' },
            { name: 'matcapBrown', source: './models/matcaps/brown.png', type: 'texture' },
            { name: 'matcapGray', source: './models/matcaps/gray.png', type: 'texture' },
            { name: 'matcapEmeraldGreen', source: './models/matcaps/emeraldGreen.png', type: 'texture' },
            { name: 'matcapPurple', source: './models/matcaps/purple.png', type: 'texture' },
            { name: 'matcapBlue', source: './models/matcaps/blue.png', type: 'texture' },
            { name: 'matcapYellow', source: './models/matcaps/yellow.png', type: 'texture' },
            { name: 'matcapMetal', source: './models/matcaps/metal.png', type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: './models/intro/static/base.glb' },
            { name: 'introStaticCollision', source: './models/intro/static/collision.glb' },
            { name: 'introStaticFloorShadow', source: './models/intro/static/floorShadow.png', type: 'texture' },

            { name: 'introInstructionsLabels', source: './models/intro/instructions/labels.glb' },
            { name: 'introInstructionsArrows', source: './models/intro/instructions/arrows.png', type: 'texture' },
            { name: 'introInstructionsControls', source: './models/intro/instructions/controls.png', type: 'texture' },
            { name: 'introInstructionsOther', source: './models/intro/instructions/other.png', type: 'texture' },

            { name: 'introArrowKeyBase', source: './models/intro/arrowKey/base.glb' },
            { name: 'introArrowKeyCollision', source: './models/intro/arrowKey/collision.glb' },

            // ── OKAZAKI letters ──────────────────────────────────
            // O → reuse existing o/base.glb
            { name: 'introOBase', source: './models/intro/o/base.glb' },
            { name: 'introOCollision', source: './models/intro/o/collision.glb' },

            // K → new letter (copy from any existing letter & edit in glb editor)
            { name: 'introKBase', source: './models/intro/k/base.glb' },
            { name: 'introKCollision', source: './models/intro/k/collision.glb' },

            // A → new letter
            { name: 'introABase', source: './models/intro/a/base.glb' },
            { name: 'introACollision', source: './models/intro/a/collision.glb' },

            // Z → new letter
            { name: 'introZBase', source: './models/intro/z/base.glb' },
            { name: 'introZCollision', source: './models/intro/z/collision.glb' },

            // I → reuse existing i/base.glb
            { name: 'introIBase', source: './models/intro/i/base.glb' },
            { name: 'introICollision', source: './models/intro/i/collision.glb' },

            // creative / dev word models — kept as is
            { name: 'introCreativeBase', source: './models/intro/creative/base.glb' },
            { name: 'introCreativeCollision', source: './models/intro/creative/collision.glb' },

            { name: 'introDevBase', source: './models/intro/dev/base.glb' },
            { name: 'introDevCollision', source: './models/intro/dev/collision.glb' },

            // Crossroads
            { name: 'crossroadsStaticBase', source: './models/crossroads/static/base.glb' },
            { name: 'crossroadsStaticCollision', source: './models/crossroads/static/collision.glb' },
            { name: 'crossroadsStaticFloorShadow', source: './models/crossroads/static/floorShadow.png', type: 'texture' },

            // Car default
            { name: 'carDefaultChassis', source: './models/car/default/chassis.glb' },
            { name: 'carDefaultWheel', source: './models/car/default/wheel.glb' },
            { name: 'carDefaultBackLightsBrake', source: './models/car/default/backLightsBrake.glb' },
            { name: 'carDefaultBackLightsReverse', source: './models/car/default/backLightsReverse.glb' },
            { name: 'carDefaultAntena', source: './models/car/default/antena.glb' },

            // Car CyberTruck
            { name: 'carCyberTruckChassis', source: './models/car/cyberTruck/chassis.glb' },
            { name: 'carCyberTruckWheel', source: './models/car/cyberTruck/wheel.glb' },
            { name: 'carCyberTruckBackLightsBrake', source: './models/car/cyberTruck/backLightsBrake.glb' },
            { name: 'carCyberTruckBackLightsReverse', source: './models/car/cyberTruck/backLightsReverse.glb' },
            { name: 'carCyberTruckAntena', source: './models/car/cyberTruck/antena.glb' },

            // Projects — board shared assets
            { name: 'projectsBoardStructure', source: './models/projects/board/structure.glb' },
            { name: 'projectsBoardCollision', source: './models/projects/board/collision.glb' },
            { name: 'projectsBoardStructureFloorShadow', source: './models/projects/board/floorShadow.png', type: 'texture' },
            { name: 'projectsBoardPlane', source: './models/projects/board/plane.glb' },

            { name: 'projectsDistinctionsAwwwardsBase', source: './models/projects/distinctions/awwwards/base.glb' },
            { name: 'projectsDistinctionsAwwwardsCollision', source: './models/projects/distinctions/awwwards/collision.glb' },
            { name: 'projectsDistinctionsFWABase', source: './models/projects/distinctions/fwa/base.glb' },
            { name: 'projectsDistinctionsFWACollision', source: './models/projects/distinctions/fwa/collision.glb' },
            { name: 'projectsDistinctionsCSSDABase', source: './models/projects/distinctions/cssda/base.glb' },
            { name: 'projectsDistinctionsCSSDACollision', source: './models/projects/distinctions/cssda/collision.glb' },

            // ── Okazaki project floor textures ───────────────────
            // To use your own: add a floorTexture.png inside each project folder
            // and update the source path below.
            { name: 'projectsJetFloor',          source: './models/projects/jet/floorTexture.png',          type: 'texture' },
            { name: 'projectsPersona5Floor',      source: './models/projects/persona5/floorTexture.png',     type: 'texture' },
            { name: 'projectsCardPortfolioFloor', source: './models/projects/cardPortfolio/floorTexture.png',type: 'texture' },
            { name: 'projectsFacePuzzleFloor',    source: './models/projects/facePuzzle/floorTexture.png',   type: 'texture' },
            { name: 'projectsHandTrackingFloor',  source: './models/projects/handTracking/floorTexture.png', type: 'texture' },

            // Information
            { name: 'informationStaticBase', source: './models/information/static/base.glb' },
            { name: 'informationStaticCollision', source: './models/information/static/collision.glb' },
            { name: 'informationStaticFloorShadow', source: './models/information/static/floorShadow.png', type: 'texture' },

            { name: 'informationBaguetteBase', source: './models/information/baguette/base.glb' },
            { name: 'informationBaguetteCollision', source: './models/information/baguette/collision.glb' },

            // Contact labels — Twitter slot → personal Instagram, LinkedIn slot → club Instagram
            { name: 'informationContactTwitterLabel',  source: './models/information/static/contactTwitterLabel.png',  type: 'texture' },
            { name: 'informationContactGithubLabel',   source: './models/information/static/contactGithubLabel.png',   type: 'texture' },
            { name: 'informationContactLinkedinLabel', source: './models/information/static/contactLinkedinLabel.png', type: 'texture' },
            { name: 'informationContactMailLabel',     source: './models/information/static/contactMailLabel.png',     type: 'texture' },

            { name: 'informationActivities', source: './models/information/static/activities.png', type: 'texture' },

            // Playground
            { name: 'playgroundStaticBase', source: './models/playground/static/base.glb' },
            { name: 'playgroundStaticCollision', source: './models/playground/static/collision.glb' },
            { name: 'playgroundStaticFloorShadow', source: './models/playground/static/floorShadow.png', type: 'texture' },

            // Brick
            { name: 'brickBase', source: './models/brick/base.glb' },
            { name: 'brickCollision', source: './models/brick/collision.glb' },

            // Horn
            { name: 'hornBase', source: './models/horn/base.glb' },
            { name: 'hornCollision', source: './models/horn/collision.glb' },

            // Webby trophy
            { name: 'webbyTrophyBase', source: './models/webbyTrophy/base.glb' },
            { name: 'webbyTrophyCollision', source: './models/webbyTrophy/collision.glb' },

            // Lemon
            { name: 'lemonBase', source: './models/lemon/base.glb' },
            { name: 'lemonCollision', source: './models/lemon/collision.glb' },

            // Bowling ball
            { name: 'bowlingBallBase', source: './models/bowlingBall/base.glb' },
            { name: 'bowlingBallCollision', source: './models/bowlingBall/collision.glb' },

            // Bowling pin
            { name: 'bowlingPinBase', source: './models/bowlingPin/base.glb' },
            { name: 'bowlingPinCollision', source: './models/bowlingPin/collision.glb' },

            // Areas
            { name: 'areaKeyEnter', source: './models/area/keyEnter.png', type: 'texture' },
            { name: 'areaEnter', source: './models/area/enter.png', type: 'texture' },
            { name: 'areaOpen', source: './models/area/open.png', type: 'texture' },
            { name: 'areaReset', source: './models/area/reset.png', type: 'texture' },
            { name: 'areaQuestionMark', source: './models/area/questionMark.png', type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: './models/tiles/a/base.glb' },
            { name: 'tilesACollision', source: './models/tiles/a/collision.glb' },

            { name: 'tilesBBase', source: './models/tiles/b/base.glb' },
            { name: 'tilesBCollision', source: './models/tiles/b/collision.glb' },

            { name: 'tilesCBase', source: './models/tiles/c/base.glb' },
            { name: 'tilesCCollision', source: './models/tiles/c/collision.glb' },

            { name: 'tilesDBase', source: './models/tiles/d/base.glb' },
            { name: 'tilesDCollision', source: './models/tiles/d/collision.glb' },

            { name: 'tilesEBase', source: './models/tiles/e/base.glb' },
            { name: 'tilesECollision', source: './models/tiles/e/collision.glb' },

            // Konami
            { name: 'konamiLabel', source: './models/konami/label.png', type: 'texture' },
            { name: 'konamiLabelTouch', source: './models/konami/label-touch.png', type: 'texture' },

            // Wigs
            { name: 'wig1', source: './models/wigs/wig1.glb' },
            { name: 'wig2', source: './models/wigs/wig2.glb' },
            { name: 'wig3', source: './models/wigs/wig3.glb' },
            { name: 'wig4', source: './models/wigs/wig4.glb' },
        ])

        this.loader.on('fileEnd', (_resource, _data) =>
        {
            this.items[_resource.name] = _data

            // Texture
            if(_resource.type === 'texture')
            {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () =>
        {
            // Trigger ready
            this.trigger('ready')
        })
    }
}