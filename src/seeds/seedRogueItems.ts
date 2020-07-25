import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Items } from '../entity/Items'

export default class CreateItems implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Items)
            .values([{
                type: "multi",
                name: "Rogue Bumper Plates by Hi-Temp",
                link: "https://www.roguefitness.com/rogue-hi-temp-bumper-plates"
            },
                {
                    type: "multi",
                    name: "Rogue HG 2.0 Bumper Plates",
                    link: "https://www.roguefitness.com/rogue-hg-2-0-bumper-plates"
                },
                {
                    type: "multi",
                    name: "Rogue HG 2.0 KG Bumper Plates",
                    link: "https://www.roguefitness.com/kg-rogue-bumpers"
                },
                {
                    type: "multi",
                    name: "Rogue LB Competition Plates",
                    link: "https://www.roguefitness.com/rogue-competition-plates"
                },
                {
                    type: "multi",
                    name: "Rogue LB Training 2.0 Plates (White Print)",
                    link: "https://www.roguefitness.com/rogue-lb-training-2-0-plates-white-print"
                },
                {
                    type: "multi",
                    name: "Rogue KG Competition Plates (IWF)",
                    link: "https://www.roguefitness.com/rogue-kg-competition-plates-iwf"
                },
                {
                    type: "multi",
                    name: "Rogue Color LB Training 2.0 Plates",
                    link: "https://www.roguefitness.com/rogue-color-lb-training-2-0-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Black Training LB Plates",
                    link: "https://www.roguefitness.com/rogue-black-training-lb-color-stripe-plates"
                },
                {
                    type: "multi",
                    name: "Rogue LB Training 2.0 Plates",
                    link: "https://www.roguefitness.com/rogue-lb-training-2-0-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Black Training KG Plates",
                    link: "https://www.roguefitness.com/rogue-black-training-kg-striped-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Echo Bumper Plates V2",
                    link: "https://www.roguefitness.com/rogue-echo-bumper-plates-with-white-text"
                },
                {
                    type: "multi",
                    name: "Rogue Echo Bumper Plates V1",
                    link: "https://www.roguefitness.com/rogue-echo-bumper-plates-with-white-text-v1"
                },
                {
                    type: "multi",
                    name: "Rogue Color Echo Bumper Plates",
                    link: "https://www.roguefitness.com/rogue-color-echo-bumper-plate"
                },
                {
                    type: "multi",
                    name: "Rogue Machined Olympic Plates",
                    link: "https://www.roguefitness.com/rogue-machined-olympic-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Fleck Plate",
                    link: "https://www.roguefitness.com/rogue-fleck-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Olympic Plates",
                    link: "https://www.roguefitness.com/rogue-olympic-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Calibrated LB Steel Plates",
                    link: "https://www.roguefitness.com/rogue-calibrated-lb-steel-plates"
                },
                {
                    type: "multi",
                    name: "Rogue LB Change Plates",
                    link: "https://www.roguefitness.com/rogue-lb-change-plates"
                },
                {
                    type: "multi",
                    name: "Rogue KG Change Plates (IWF)",
                    link: "https://www.roguefitness.com/rogue-kg-change-plates"
                },
                {
                    type: "multi",
                    name: "Rogue US-MIL Spec Bumper",
                    link: "https://www.roguefitness.com/rogue-us-mil-sprc-bumper-plates"
                },
                {
                    type: "multi",
                    name: "Rogue MIL Spec Echo Bumper",
                    link: "https://www.roguefitness.com/rogue-mil-echo-bumper-plates-black"
                },
                {
                    type: "multi",
                    name: "Rogue 6-Shooter Olympic Grip Plates",
                    link: "https://www.roguefitness.com/rogue-6-shooter-olympic-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Calibrated KG Steel Plates",
                    link: "https://www.roguefitness.com/rogue-calibrated-kg-steel-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Urethane Plates",
                    link: "https://www.roguefitness.com/rogue-urethane-plates"
                },
                {
                    type: "multi",
                    name: "Rogue Vertical Plate Tree 2.0",
                    link: "https://www.roguefitness.com/rogue-vertical-plate-tree-2-0"
                },
                {
                    type: "single",
                    name: "The Ohio Bar - Black Oxide",
                    link: "https://www.roguefitness.com/rogue-ohio-bar-black-oxide"
                },
                {
                    type: "single",
                    name: "The Ohio Bar - Black Zinc",
                    link: "https://www.roguefitness.com/the-ohio-bar-black-zinc"
                },
                {
                    type: "single",
                    name: "The Ohio Bar - E-Coat",
                    link: "https://www.roguefitness.com/the-ohio-bar-2-0-e-coat"
                },
                {
                    type: "single",
                    name: "The Ohio Bar - Stainless Steel",
                    link: "https://www.roguefitness.com/stainless-steel-ohio-bar"
                },
                {
                    type: "cerakote",
                    name: "The Ohio Bar - Cerakote",
                    link: "https://www.roguefitness.com/the-ohio-bar-cerakote"
                },
                {
                    type: "single",
                    name: "Rogue 45LB Ohio Power Bar - Bare Steel",
                    link: "https://www.roguefitness.com/rogue-45lb-ohio-power-bar-bare-steel"
                },
                {
                    type: "single",
                    name: "Rogue 45LB Ohio Power Bar - E-Coat",
                    link: "https://www.roguefitness.com/rogue-ohio-power-bar-e-coat"
                },
                {
                    type: "single",
                    name: "Rogue 45LB Ohio Power Bar - Black Zinc",
                    link: "https://www.roguefitness.com/rogue-45lb-ohio-power-bar-black-zinc"
                },
                {
                    type: "custom",
                    name: "Rogue 45LB Ohio Power Bar - Stainless Steel",
                    link: "https://www.roguefitness.com/rogue-45lb-ohio-power-bar-stainless"
                },
                {
                    type: "single",
                    name: "Rogue 20KG Ohio Power Bar - Stainless Steel",
                    link: "https://www.roguefitness.com/rogue-20-kg-ohio-power-bar-stainless-steel"
                },
                {
                    type: "cerakote",
                    name: "Rogue 45LB Ohio Power Bar - Cerakote",
                    link: "https://www.roguefitness.com/rogue-45lb-ohio-powerlift-bar-cerakote"
                },
                {
                    type: "bone",
                    name: "Boneyard 29mm Bars",
                    link: "https://www.roguefitness.com/rogue-29mm-boneyard-bars"
                },
                {
                    type: "bone",
                    name: "Boneyard 28mm Bars",
                    link: "https://www.roguefitness.com/rogue-28mm-boneyard-bars"
                },
                {
                    type: "bone",
                    name: "Boneyard 28.5mm Bars",
                    link: "https://www.roguefitness.com/rogue-28-5-mm-boneyard-bars"
                },
                {
                    type: "bone",
                    name: "Boneyard Deadlift Bars",
                    link: "https://www.roguefitness.com/rogue-boneyard-ohio-deadlift-bar"
                },
                {
                    type: "bone",
                    name: "Boneyard Curl Bars",
                    link: "https://www.roguefitness.com/rogue-boneyard-curl-bar"
                },
                {
                    type: "bone",
                    name: "Rogue 25MM Boneyard Bars",
                    link: "https://www.roguefitness.com/rogue-25mm-boneyard-bars"
                },
                {
                    type: "grab bag",
                    name: "Used Barbells",
                    link: "https://www.roguefitness.com/miscellaneous-barbells-used"
                },
                {
                    type: "bone",
                    name: "Boneyard OSO Pro Collars",
                    link: "https://www.roguefitness.com/boneyard-oso-pro-collars-closeout"
                },
                {
                    type: "single",
                    name: "The Bella Bar 2.0 - E-Coat",
                    link: "https://www.roguefitness.com/the-bella-bar-2-0-e-coat"
                },
                {
                    type: "single",
                    name: "The Bella Bar 2.0 - Black Zinc",
                    link: "https://www.roguefitness.com/rogue-bella-bar-2-0-black-zinc"
                },
                {
                    type: "single",
                    name: "The Bella Bar 2.0 - Stainless Steel",
                    link: "https://www.roguefitness.com/the-bella-bar-2-0-stainless"
                },
                {
                    type: "cerakote",
                    name: "The Bella Bar 2.0 - Cerakote",
                    link: "https://www.roguefitness.com/the-bella-rogue-womens-bar-cerakote"
                },
                {
                    type: "cerakote",
                    name: "Rogue Operator Bar 3.0",
                    link: "https://www.roguefitness.com/rogue-operator-bar-cerakote"
                },
                {
                    type: "cerakote",
                    name: "Rogue Chan Bar - Cerakote",
                    link: "https://www.roguefitness.com/chan-bar-cerakote"
                },
                {
                    type: "multi",
                    name: "Rogue 28MM Training Bar - Black Zinc",
                    link: "https://www.roguefitness.com/rogue-28mm-training-bar"
                },
                {
                    type: "cerakote",
                    name: "Rogue 28MM Training Bar - Cerakote",
                    link: "https://www.roguefitness.com/rogue-28mm-training-bar-cerakote"
                },
                {
                    type: "single",
                    name: "ogue B&R Bar 2.0",
                    link: "https://www.roguefitness.com/rogue-29mm-burgener-rippetoe-bar-2-0"
                },
                {
                    type: "single",
                    name: "Rogue Curl Bar - Cerakote",
                    link: "https://www.roguefitness.com/rogue-curl-bar-cerakote"
                },
                {
                    type: "multi",
                    name: "Rogue Curl Bar",
                    link: "https://www.roguefitness.com/rogue-curl-bar"
                },
                {
                    type: "single",
                    name: "Rogue Rackable Curl Bar",
                    link: "https://www.roguefitness.com/rogue-rackable-curl-bar"
                },
                {
                    type: "multi",
                    name: "The Rogue Bar 2.0",
                    link: "https://www.roguefitness.com/the-rogue-bar-2-0"
                },
                {
                    type: "single",
                    name: "Rogue Echo Bar 2.0",
                    link: "https://www.roguefitness.com/rogue-echo-bar"
                },
                {
                    type: "single",
                    name: "Rogue Freedom Bar - 28.5MM",
                    link: "https://www.roguefitness.com/cerakote-28-5-mm-freedom-bar"
                },
                {
                    type: "db15",
                    name: "Rogue DB-15 Loadable Dumbbell",
                    link: "https://www.roguefitness.com/rogue-loadable-dumbbells"
                },
                {
                    type: "multi",
                    name: "Rogue Echo Bike",
                    link: "https://www.roguefitness.com/rogue-echo-bike"
                },
                {
                    type: "monster bench",
                    name: "Monster Utility Bench 2.0",
                    link: "https://www.roguefitness.com/monster-utility-bench-2-0-mg-black"
                },
                {
                    type: "single",
                    name: "Rogue Flat Utility Bench 2.0",
                    link: "https://www.roguefitness.com/rogue-flat-utility-bench"
                },
                {
                    type: "multi",
                    name: "Rogue Adjustable Bench 2.0",
                    link: "https://www.roguefitness.com/rogue-adjustable-bench-2-0"
                },
                {
                    type: "multi",
                    name: "AB-2 Adjustable Bench",
                    link: "https://www.roguefitness.com/ab-2-adjustable-bench"
                },
                {
                    type: "multi",
                    name: "Rogue AB-3 Adjustable Bench",
                    link: "https://www.roguefitness.com/rogue-ab-3-adjustable-bench"
                },
                {
                    type: "single",
                    name: "Thompson Fat Pad™",
                    link: "https://www.roguefitness.com/thompson-fatpad"
                },
                {
                    type: "single",
                    name: "Rogue Competition Fat Pad",
                    link: "https://www.roguefitness.com/rogue-competition-fat-pad"
                },
                {
                    type: "single",
                    name: "Rogue Fold Up Utility Bench",
                    link: "https://www.roguefitness.com/rogue-fold-up-utility-bench"
                },
                {
                    type: "multi",
                    name: "Rogue Westside Bench 2.0",
                    link: "https://www.roguefitness.com/rogue-westside-bench-2-0"
                },
                {
                    type: "multi",
                    name: "Rogue Monster Westside Bench",
                    link: "https://www.roguefitness.com/rogue-monster-westside-bench"
                },
                {
                    type: "multi",
                    name: "SML-2 Rogue 90' Monster Lite Squat Stand",
                    link: "https://www.roguefitness.com/sml-2-rogue-90-monster-lite-squat-stand"
                },
                {
                    type: "multi",
                    name: "SML-3 Rogue 108' Monster Lite Squat Stand",
                    link: "https://www.roguefitness.com/sml-3-rogue-108-monster-lite-squat-stand"
                },
                {
                    type: "multi",
                    name: "Rogue S-1 Squat Stand 2.0",
                    link: "https://www.roguefitness.com/rogue-s-1-squat-stand-2-0"
                },
                {
                    type: "multi",
                    name: "Rogue S-2 Squat Stand 2.0",
                    link: "https://www.roguefitness.com/rogue-s2-squat-stand-2-0"
                },
                {
                    type: "multi",
                    name: "Rogue S-4 Squat Stand 2.0",
                    link: "https://www.roguefitness.com/rogue-s-4-squat-stand-2"
                },
                {
                    type: "multi",
                    name: "Rogue Echo Squat Stand 2.0",
                    link: "https://www.roguefitness.com/rogue-echo-squat-stand-2-0"
                },
                {
                    type: "multi",
                    name: "RML-390F Flat Foot Monster Lite Rack",
                    link: "https://www.roguefitness.com/rml-390f-flat-foot-monster-lite-rack"
                },
                {
                    type: "multi",
                    name: "Rogue RML-490 Power Rack",
                    link: "https://www.roguefitness.com/rogue-rml-490-power-rack"
                },
                {
                    type: "rmlc",
                    name: "Rogue RML-490C Power Rack 3.0",
                    link: "https://www.roguefitness.com/rogue-rml-490-power-rack-color-3-0"
                },
                {
                    type: "multi",
                    name: "Rogue RML-690 Power Rack",
                    link: "https://www.roguefitness.com/rml-690-power-rack"
                },
                {
                    type: "multi",
                    name: "Rogue R-3 Power Rack",
                    link: "https://www.roguefitness.com/rogue-r-3-power-rack"
                },
                {
                    type: "multi",
                    name: "Rogue RM-3 Fortis Rack",
                    link: "https://www.roguefitness.com/rogue-rm-3-fortis-rack"
                },
                {
                    type: "multi",
                    name: "Rogue RM-4 Fortis Rack",
                    link: "https://www.roguefitness.com/rogue-rm-4-fortis-rack"
                },
                {
                    type: "single",
                    name: "Rogue Combo Rack",
                    link: "https://www.roguefitness.com/rogue-combo-rack"
                },
                {
                    type: "single",
                    name: "SAML-24 Monster Lite Safety Spotter Arms (Pair)",
                    link: "https://www.roguefitness.com/saml-24-monster-lite-spotter-arms-pair"
                },
                {
                    type: "single",
                    name: "Monster Safety Spotter Arms 2.0",
                    link: "https://www.roguefitness.com/monster-safety-spotter-arms-2-0"
                },
                {
                    type: "single",
                    name: "Rogue Infinity Safety Spotter Arms",
                    link: "https://www.roguefitness.com/set-of-safety-spotter-arms"
                },
                {
                    type: "multi",
                    name: "Monster Lite Strap Safety System 2.0",
                    link: "https://www.roguefitness.com/monster-lite-strap-safety-system-2-0"
                },
                {
                    type: "multi",
                    name: "Infinity Strap Safety System 2.0",
                    link: "https://www.roguefitness.com/infinity-strap-safety-system-2-0"
                },
                {
                    type: "single",
                    name: "Rogue Infinity J-Cup Set",
                    link: "https://www.roguefitness.com/extra-infinity-j-cup-set"
                },
                {
                    type: "single",
                    name: "Monster Lite J-Cups",
                    link: "https://www.roguefitness.com/j-3358-monster-lite-j-cups"
                },
                {
                    type: "single",
                    name: "Monster Lite Sandwich J-Cup Pair",
                    link: "https://www.roguefitness.com/monster-lite-sandwich-j-cup-pair"
                },
                {
                    type: "multi",
                    name: "Rogue Landmines",
                    link: "https://www.roguefitness.com/landmines"
                },
                {
                    type: "single",
                    name: "Rogue Monster Landmine 2.0",
                    link: "https://www.roguefitness.com/rogue-monster-landmine-2-0"
                },
                {
                    type: "multi",
                    name: "Y-1 Rogue Yoke",
                    link: "https://www.roguefitness.com/rogue-yoke"
                },
                {
                    type: "multi",
                    name: "Y-2 Rogue Yoke",
                    link: "https://www.roguefitness.com/y2-yoke"
                },
                {
                    type: "single",
                    name: "Black Concept 2 Model D Rower - PM5",
                    link: "https://www.roguefitness.com/black-concept-2-model-d-rower-pm5"
                },
                {
                    type: "single",
                    name: "Rogue Abram GHD 2.0",
                    link: "https://www.roguefitness.com/rogue-abram-glute-ham-developer-2-0"
                },
                {
                    type: "multi",
                    name: "Rogue Monster Swing Arm GHD",
                    link: "https://www.roguefitness.com/rogue-monster-swing-arm-ghd"
                },
                {
                    type: "multi",
                    name: "Rogue 3x3 Echo GHD",
                    link: "https://www.roguefitness.com/rogue-echo-ghd"
                },
                {
                    type: "single",
                    name: "Mini Deadlift Bar Jack",
                    link: "https://www.roguefitness.com/mini-deadlift-bar-jack"
                },
                {
                    type: "single",
                    name: "Rogue Deadlift Bar Jack",
                    link: "https://www.roguefitness.com/bar-jack"
                },
                {
                    type: "multi",
                    name: "Rogue Kettlebells",
                    link: "https://www.roguefitness.com/rogue-kettlebells"
                },
                {
                    type: "multi",
                    name: "Rogue Competition Kettlebells",
                    link: "https://www.roguefitness.com/rogue-competition-kettlebells"
                },
                {
                    type: "multi",
                    name: "Rogue Kettlebell - E Coat",
                    link: "https://www.roguefitness.com/rogue-kettlebell-e-coat"
                },
                {
                    type: "multi",
                    name: "Rogue Dumbbells",
                    link: "https://www.roguefitness.com/rogue-dumbbells"
                },
                {
                    type: "multi",
                    name: "Rogue Dumbbell Sets",
                    link: "https://www.roguefitness.com/rogue-rubber-hex-dumbbell-sets"
                },
                {
                    type: "multi",
                    name: "Rogue Medicine Balls",
                    link: "https://www.roguefitness.com/rogue-medicine-balls"
                },
                {
                    type: "multi",
                    name: "Rogue Thompson Fatbells",
                    link: "https://www.roguefitness.com/rogue-thompson-fatbells"
                },
                {
                    type: "single",
                    name: "Rogue Adjustable Monolift - Monster",
                    link: "https://www.roguefitness.com/rogue-adjustable-monolift-monster"
                },
                {
                    type: "multi",
                    name: "Rogue Adjustable Monolift - Monster Lite",
                    link: "https://www.roguefitness.com/rogue-adjustable-monolift-monster-lite"
                },
                {
                    type: "single",
                    name: "Rogue Monster Mini Feet",
                    link: "https://www.roguefitness.com/rogue-monster-mini-feet"
                },
                {
                    type: "single",
                    name: "SP33100 Plate Storage Pair - Long for 3x3 Monster",
                    link: "https://www.roguefitness.com/sp33100-plate-storage-long-for-3x3-monster"
                },
                {
                    type: "single",
                    name: "Rogue 28MM IWF Olympic Weightlifting Bar w/ Center Knurl - Bright Zinc",
                    link: "https://www.roguefitness.com/rogue-iwf-olympic-wl-bar-w-center-knurl-bright-zinc"
                },
                {
                    type: "multi",
                    name: "Rogue Bolt-Together R-3",
                    link: "https://www.roguefitness.com/rogue-bolt-together-r-3"
                },
                {
                    type: "multi",
                    name: "Rogue Monster Matador",
                    link: "https://www.roguefitness.com/rogue-monster-matador"
                },
                {
                    type: "single",
                    name: "Rogue Monster Lite Matador",
                    link: "https://www.roguefitness.com/rogue-monster-lite-matador"
                },
                {
                    type: "single",
                    name: "Rogue Infinity Matador",
                    link: "https://www.roguefitness.com/rogue-infinity-matador"
                },
                {
                    type: "multi",
                    name: "Assault AirBike",
                    link: "https://www.roguefitness.com/assault-airbike-and-accessories"
                },
                {
                    type: "single",
                    name: "Concept 2 BikeErg",
                    link: "https://www.roguefitness.com/concept2-bike-erg"
                },
                {
                    type: "single",
                    name: "Post Landmine",
                    link: "https://www.roguefitness.com/post-landmine"
                },
                {
                    type: "single",
                    name: "CB-1 Rogue Camber Bar",
                    link: "https://www.roguefitness.com/cb-1-rogue-camber-bar"
                },
                {
                    type: "multi",
                    name: "Rogue Deadlift Platform",
                    link: "https://www.roguefitness.com/rogue-deadlift-platform"
                },
                {
                    type: "multi",
                    name: "Rogue Dumbbell Bumpers",
                    link: "https://www.roguefitness.com/rogue-dumbbell-bumpers"
                },
                {
                    type: "single",
                    name: "Ab Wheel",
                    link: "https://www.roguefitness.com/ab-wheel"
                },
                {
                    type: "single",
                    name: "Rogue Stainless Lat Bar",
                    link: "https://www.roguefitness.com/rogue-stainless-steel-lat-bar"
                },
                {
                    type: "single",
                    name: "Rogue Monster Lite Adjustable Pull-up Bar",
                    link: "https://www.roguefitness.com/rogue-monster-lite-adjustable-pull-up-bar"
                },
                {
                    type: "single",
                    name: "Rogue Monster Rhino Belt Squat - Stand Alone",
                    link: "https://www.roguefitness.com/monster-rhino-belt-squat-stand-alone-mg-black"
                },
                {
                    type: "multi",
                    name: "Rogue Monster Grip Triangle",
                    link: "https://www.roguefitness.com/rogue-monster-grip-triangle"
                },
                {
                    type: "single",
                    name: "Rogue TB-1 Trap Bar 2.0",
                    link: "https://www.roguefitness.com/rogue-tb-1-trap-bar-2-0"
                },
                {
                    type: "single",
                    name: "Rogue TB-2 Trap Bar",
                    link: "https://www.roguefitness.com/rogue-tb-2-trap-bar"
                },
                {
                    type: "single",
                    name: "Rogue Grip Triangle (Standard Grip)",
                    link: "https://www.roguefitness.com/rogue-grip-triangle-standard-grip"
                },
                {
                    type: "single",
                    name: "Rogue Tricep Push Down Attachment",
                    link: "https://www.roguefitness.com/rogue-tricep-pushdown-attachment"
                },
                {
                    type: "multi",
                    name: "Rogue T Bar Row",
                    link: "https://www.roguefitness.com/rogue-t-bar-row"
                },
                {
                    type: "single",
                    name: "XM-43M Monster Multi Grip Crossmember",
                    link: "https://www.roguefitness.com/xm-43m-monster-multi-grip-crossmember"
                },
                {
                    type: "multi",
                    name: "Monster Lite Crossmembers",
                    link: "https://www.roguefitness.com/monster-lite-crossmembers"
                },
                {
                    type: "multi",
                    name: "Rogue Echo Gym Timer",
                    link: "https://www.roguefitness.com/rogue-echo-gym-timer"
                },
                {
                    type: "multi",
                    name: "Rogue Home Timer",
                    link: "https://www.roguefitness.com/rogue-home-timer"
                },
                {
                    type: "single",
                    name: "Rogue Monster Lite Shackle",
                    link: "https://www.roguefitness.com/rogue-monster-lite-shackle"
                },
                {
                    type: "multi",
                    name: "Rogue MG-2 Multi Grip Bars",
                    link: "https://www.roguefitness.com/rogue-mg-2-multi-grip-bars"
                },
                {
                    type: "multi",
                    name: "Rogue MG-3 Multi Grip Bar",
                    link: "https://www.roguefitness.com/rogue-mg-3-multi-grip-bar"
                },
                {
                    type: "multi",
                    name: "UK Rogue Color Echo Bumper Plates",
                    link: "https://www.rogueeurope.eu/rogue-color-echo-bumper-plate-eu"
                },
                {
                    type: "multi",
                    name: "UK Rogue Echo Bumper Plates V2",
                    link: "https://www.rogueeurope.eu/rogue-echo-bumper-plates-with-white-text-eu"
                },
                {
                    type: "multi",
                    name: "UK Rogue RR Plates",
                    link: "https://www.rogueeurope.eu/rogue-rr-bumper-plates-eu"
                },
                {
                    type: "single",
                    name: "UK The Bella Bar 2.0 - Black Zinc",
                    link: "https://www.rogueeurope.eu/rogue-bella-bar-eu"
                },
                {
                    type: "single",
                    name: "UK Rogue 20KG Ohio Power Bar - Stainless Steel",
                    link: "https://www.rogueeurope.eu/rogue-20-kg-ohio-power-bar-stainless-steel-eu"
                },
                {
                    type: "multi",
                    name: "AU AB-2 Adjustable Bench",
                    link: "https://www.rogueaustralia.com.au/ab-2-adjustable-bench-au"
                },
                {
                    type: "single",
                    name: "AU Rogue 20KG Ohio Power Bar - Black Zinc",
                    link: "https://www.rogueaustralia.com.au/rogue-20-kg-ohio-power-bar-black-zinc-au"
                },
                {
                    type: "single",
                    name: "AU Rogue 20KG Ohio Power Bar - Stainless Steel",
                    link: "https://www.rogueaustralia.com.au/rogue-20-kg-ohio-power-bar-stainless-steel-au"
                },
                {
                    type: "multi",
                    name: "SML-1 Rogue 70 Monster Lite Squat Stand",
                    link: "https://www.rogueaustralia.com.au/sml-1-rogue-70-monster-lite-squat-stand-au"
                },
                {
                    type: "multi",
                    name: "SAML-24 Monster Lite Safety Spotter Arms (Pair)",
                    link: "https://www.rogueaustralia.com.au/saml-24-monster-lite-spotter-arms-pair-au"
                },
                {
                    type: "single",
                    name: "Rogue 32MM Squat Bar",
                    link: "https://www.roguefitness.com/rogue-32-mm-squat-bar"
                }
            ])
            .execute()
    }
}
