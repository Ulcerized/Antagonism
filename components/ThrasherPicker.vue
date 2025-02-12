<script lang="ts" setup>
const thrashers = [{
  name: 'renan',
  fullname: 'Renan "Ulcer" Garriguenc',
  stats: "Rôle : Basse, Chœur, le gars qui gère l'assurance et le site<br>Influences : Annihilator, Exodus, Anthrax, MOD, SOD, Megadeth, Death, Overkill<br>Meilleur concert : Municipal Waste, Lyon 2019<br>Album de Thrash préféré : Alice in Hell, Annihilator<br>Bière préféré : Blanche, Rousse<br>Tatouages : Oui<br>Conseil pour la jeunesse : Non<br><br>Actif dans le groupe depuis Mai 2019.<br>A participé à l'enregistrement de :<br>- World on Disease (2020)<br>- First in, First out (2023)'<br>",
  left: "60%",
  top: "50%"
}, {
  name: 'loic',
  fullname: 'Loïc Gasnier',
  stats: "Loic",
  left: "70%",
  top: "50%"
}, {
  name: 'dylan',
  fullname: 'Dylan Anger',
  stats: 'dilan',
  left: "30%",
  top: "50%"
}, {
  name: 'raph',
  fullname: 'Raphaël Gloaguen',
  stats: 'Glouglou',
  left: "50%",
  top: "50%"
}]

var activated1 = ref('');

const azertyuiop = (yomama: string) => {
  activated1.value = yomama
}



</script>

<template>
  <div class="azerty">
    <img src="assets/images/bioPic.jpeg" alt="biocancer">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="-1115 -757 2294 1521 " xml:space="preserve" class="svg">
      <g id="Calque_1">

        <image v-on:click="azertyuiop('')" width="2294" height="1521" transform="matrix(1 0 0 1 -1115 -757)">
        </image>
      </g>
      <g id="Calque_2" v-on:click="azertyuiop('renan')" :class="{ activated2: activated1 === 'renan' }">
        <g>
          <polygon class="st0" points="-932.5,759.5 -844.3,591.8 -894.2,291.7 -966.1,469.6 -1052.7,472.4 -1073.5,90.3 -1027.2,-170.5 
			-872.2,-172.5 -810.9,-95.1 -382.8,-165.6 -267,-213.9 -237.5,-102.6 -256.4,153.8 -448.5,76 -585.2,164 -479.8,573.3 
			-593.5,759.5 		" />
          <path class="st1" d="M-270.1-207.7l28,105.6l-18.3,249.5l-184.2-74.7l-4.3-1.8l-3.9,2.5l-132,85l-5.5,3.5l1.6,6.3l104.1,404.3
			L-596.1,755h-329l84.1-159.8l1.4-2.7l-0.5-3l-47-282.8l-5.2-31.5l-12,29.7l-64.8,160.4l-79.3,2.5L-1069,90.5l45.5-256.6l149.1-1.9
			l58.3,73.5l3.3,4.2l5.2-0.9l425-70l1-0.2l1-0.4L-270.1-207.7 M-264-220l-120,50l-425,70l-61-77l-161,2l-47,265l21,387l94-3
			l67-165.8l47,282.8l-91,173h349l116-190l-105-408l132-85l195.7,79.3L-233-103L-264-220L-264-220z" />
        </g>
        <line class="st2" x1="-386.1" y1="91.1" x2="-261.1" y2="3.5" />
        <line class="st2" x1="-759.3" y1="747" x2="-510.9" y2="573.1" />
        <line class="st2" x1="-821.4" y1="592.7" x2="-544.8" y2="399" />
        <line class="st2" x1="-850.4" y1="416.1" x2="-579.1" y2="226.2" />
        <line class="st2" x1="-1033.2" y1="346.3" x2="-330.8" y2="-145.5" />
        <line class="st2" x1="-1042.7" y1="156.1" x2="-692.3" y2="-89.3" />
        <line class="st2" x1="-1033.1" y1="-49.3" x2="-880.4" y2="-156.3" />
      </g>
      <g id="Calque_3" v-on:click="azertyuiop('loic')" :class="{ activated2: activated1 === 'loic' }">
        <g>
          <polygon class="st0" points="-495.4,-166.3 -364.2,-367 -327.3,-622.4 -262.6,-647.4 -100.4,-633.8 -13.7,-466.4 17.1,-181.7 
			-64.9,82.5 -218.3,35.3 -213.1,-105.1 -352.9,141.6 -445.3,167.6 		" />
          <path class="st1"
            d="M-261.9-642.9l158.7,13.3l85.2,164.4l30.6,282.9L-67.9,76.9L-213.7,32l4.4-118.5l1.4-36.9l-18.2,32.1
			l-129.8,229l-85.7,24.1l-49.1-327.2L-361-363.7l1.1-1.7l0.3-2l36.4-251.8L-261.9-642.9 M-263.2-652l-68.1,26.3l-37.2,257
			l-131.6,201.3l51.1,340.6l99.1-27.9l131.6-232.3L-223,38.6l161,49.5l83.6-269.4l-31-286.5l-88.3-170.3L-263.2-652L-263.2-652z" />
        </g>
        <line class="st2" x1="-88.5" y1="69.5" x2="-56.8" y2="47.3" />
        <line class="st2" x1="-427" y1="109.7" x2="-289.3" y2="13.3" />
        <line class="st2" x1="-371.9" y1="-323.6" x2="-72.6" y2="-533.2" />
        <line class="st2" x1="-331.8" y1="-550.4" x2="-215" y2="-632.2" />
        <line class="st2" x1="-469.7" y1="-58.2" x2="-17.5" y2="-374.9" />
        <line class="st2" x1="-211" y1="-41.6" x2="5.1" y2="-192.8" />
      </g>
      <g id="Calque_4" v-on:click="azertyuiop('dylan')" :class="{ activated2: activated1 === 'dylan' }">
        <g>
          <polygon class="st0" points="383.2,696.3 309.4,383.7 312.9,714 106.7,721.3 139.3,608.7 105.2,385.6 125.7,302.2 29.8,186.5 
			132.4,112.5 177.4,-47.1 237.5,-96.4 290.9,-212.4 446.6,-212.4 460.2,-99.1 540.3,9.2 512.9,212.8 459.5,260 563.6,690.2 
			542.3,751.3 		" />
          <path class="st1" d="M442.6-207.9l13,108.2l0.3,2.4l1.4,1.9l78.3,105.8l-26.9,200.2l-50.1,44.2l-4.1,3.6l1.3,5.3L558.9,690
			l-19.4,55.6L387,692.9l-63.9-270.8l-18.6-78.9l0.9,81l3,285.4l-195.6,7l30.6-105.7l0.6-1.9l-0.3-2l-33.8-221.2l19.7-80.3l1.1-4.4
			l-2.9-3.5L36.3,187.3l97.5-70.2l2.5-1.8l0.9-3l44.1-156.8l58.2-47.8l1.6-1.3l0.9-1.9l51.8-112.4H442.6 M450.6-216.9H288
			L233.8-99.2l-60.4,49.5l-44.9,159.5L23.2,185.7l97.5,117.7l-20.1,82.1l34.1,223l-34.1,117.7l216.8-7.7l-3.1-294.2l65,275.6
			L545,757l23.2-66.6L464.5,261.5l52.6-46.5L545,8l-80.5-108.8L450.6-216.9L450.6-216.9z" />
        </g>
        <line class="st2" x1="473" y1="714.1" x2="545.9" y2="663.1" />
        <line class="st2" x1="212.1" y1="699.1" x2="295.7" y2="640.5" />
        <line class="st2" x1="149.8" y1="545.9" x2="288" y2="449.1" />
        <line class="st2" x1="125.3" y1="365.1" x2="511.6" y2="94.6" />
        <line class="st2" x1="69.9" y1="207.1" x2="462.3" y2="-67.7" />
        <line class="st2" x1="268.9" y1="-131" x2="356.1" y2="-192" />
        <line class="st2" x1="330.7" y1="419.2" x2="463" y2="326.5" />
        <line class="st2" x1="371.9" y1="587.2" x2="502.3" y2="495.9" />
      </g>
      <g id="Calque_5" v-on:click="azertyuiop('raph')" :class="{ activated2: activated1 === 'raph' }">
        <g>
          <polygon class="st0" points="927.4,759.5 798.7,450.4 687.4,759.5 514.7,759.5 648.3,-72.2 864.9,-279.7 1086.6,-182.5 
			1154.8,-14.2 1017.3,269.3 1079.5,689.8 1108.1,759.5 		" />
          <path class="st1" d="M865.9-274.4l217.2,95.2l66.8,164.8l-136.1,280.5l-1.2,2.5l0.4,2.7L1075,690l0.2,1.1l0.4,1l25.9,62.9h-171
			L807.3,459.4l-8.9-21.4l-7.9,21.8L684.3,755H520L652.5-70L865.9-274.4 M864-285L644.1-74.5L509.5,764h181.1L799,462.8L924.4,764
			h190.5l-31-75.4l-61.9-418.6l137.8-284.1l-69.7-171.9L864-285L864-285z" />
        </g>
        <line class="st2" x1="940.8" y1="746.1" x2="1063.8" y2="660" />
        <line class="st2" x1="875.9" y1="593.8" x2="1035.7" y2="481.9" />
        <line class="st2" x1="812.7" y1="441.2" x2="1009.9" y2="303.1" />
        <line class="st2" x1="591.4" y1="398.3" x2="1106" y2="37.9" />
        <line class="st2" x1="626.1" y1="177.2" x2="1074.2" y2="-136.6" />
        <line class="st2" x1="660.2" y1="-45.5" x2="927" y2="-232.2" />
        <line class="st2" x1="657.2" y1="746.9" x2="688" y2="725.3" />
        <line class="st2" x1="551.6" y1="624" x2="780.5" y2="463.7" />
      </g>
    </svg>
    <div class="info" v-for="thrasher in thrashers" :class="{ activated: activated1 === thrasher.name }"
      :style="{ left: thrasher.left, top: thrasher.top }">
      <h3>{{ thrasher.fullname }}</h3>
      <p v-html="thrasher.stats"></p>
    </div>
  </div>
</template>

<style>
.azerty {
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  .svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .st0 {
    fill: #FFFFFF00;
  }

  .st1 {
    fill: none;
  }

  .st2 {
    stroke-width: 5;
    stroke-miterlimit: 10;
  }

  g:hover {
    .st1 {
      fill: #FFFFFF;
    }

  }

  .activated2 {
    .st1 {
      fill: #FFF;
    }

    .st2 {
      stroke: #FFF;
    }
  }


  .info {
    display: none;
    width: 330px;
    padding: 1rem;
    transform: translate(-50%, -50%);

    &.activated {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      left: 0;
      color: #111;
      background-color: var(--color-1);
      border: 4px solid var(--color-2);
      gap: 2rem;
      border-radius: 10px;

      h3 {
        font-family: VHS Gothic;
        font-size: 1rem;
        color: var(--color-3);
        align-self: center;
      }

      p {
        font-family: Nova Flat;
        font-size: 1rem;
        color: var(--color-4);
      }
    }
  }

}
</style>