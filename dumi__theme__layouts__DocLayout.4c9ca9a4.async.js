"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{148050:function(Fn,cn,a){a.d(cn,{Z:function(){return on}});var _=a(168400),S=a.n(_),en=a(667294),C=a(186548),Dn=a(65630),tn=a(879587),Cn=a(785893),c,h="https://github.com/ant-design/ant-design/edit/master/",W=(0,Dn.kc)(function(G){var rn=G.token,Ln=G.css,d=rn.colorIcon,z=rn.colorText,L=rn.iconCls;return{editButton:Ln(c||(c=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),L,d,z)}});function on(G){var rn=G.title,Ln=G.filename,d=W(),z=d.styles;return(0,Cn.jsx)(tn.Z,{title:rn,children:(0,Cn.jsx)("a",{className:z.editButton,href:"".concat(h).concat(Ln),target:"_blank",rel:"noopener noreferrer",children:(0,Cn.jsx)(C.Z,{})})})}},847740:function(Fn,cn,a){a.r(cn),a.d(cn,{default:function(){return Ar}});var _=a(805574),S=a.n(_),en=a(294184),C=a.n(en),Dn=a(727484),tn=a.n(Dn),Cn=a(533852),c=a(454769),h=a(667294),W=a(715778),on=a(773036),G=a(302559),rn=a(438746),Ln=a(168400),d=a.n(Ln),z=a(370917),L=a(65630),n=a(785893),V,oe={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Un=function(){var e=(0,L.Fg)(),t=function i(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(l,"-").concat(p,` {
  background: `).concat(e["".concat(l,"-").concat(p)],`;
}
`).concat(i(l,p+1),`
    `):""},o=function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return l<=13?`
.palette-gray-`.concat(l,` {
  background: `).concat(oe[l],`;
}
`).concat(i(l+1),`
    `):""};return(0,n.jsx)(z.xB,{styles:(0,z.iv)(V||(V=d()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),o())})},re=Un,Gn,ae=function(){return(0,n.jsx)(z.xB,{styles:(0,z.iv)(Gn||(Gn=d()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Vn,ie=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(Vn||(Vn=d()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},Rn,le=function(){var r=(0,L.Fg)(),e=r.anchorTop;return(0,n.jsx)(z.xB,{styles:(0,z.iv)(Rn||(Rn=d()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},An=a(510274),se,ce=function(){var e=(0,L.Fg)(),t=e.antCls,o=e.colorPrimary;return(0,n.jsx)(z.xB,{styles:(0,z.iv)(se||(se=d()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.colorText,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,o,new An.C(o).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new An.C(o).setAlpha(.75).toHexString(),t,t,new An.C(o).setAlpha(.75).toHexString(),t,t,t,t,new An.C(o).setAlpha(.6).toHexString(),t,t,t)})},Kn=ce,Xn,de=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(Xn||(Xn=d()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},an,s=function(){var e=(0,L.Fg)(),t=e.antCls,o=e.iconCls;return(0,n.jsx)(z.xB,{styles:(0,z.iv)(an||(an=d()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,o,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,o,e.colorBgContainer,o,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},D=s,k,T=function(){var r=(0,L.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(z.xB,{styles:(0,z.iv)(k||(k=d()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},O,dn=function(){var r=(0,L.Fg)(),e=r.iconCls;return(0,n.jsx)(z.xB,{styles:(0,z.iv)(O||(O=d()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},pn,vn=function(){return(0,n.jsx)(z.xB,{styles:(0,z.iv)(pn||(pn=d()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},un,ln=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(un||(un=d()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},sn,J=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(sn||(sn=d()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},mn,yn=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(mn||(mn=d()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},hn,bn="dumi-default-",kn=function(){var r=(0,L.Fg)();return(0,n.jsx)(z.xB,{styles:(0,z.iv)(hn||(hn=d()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),bn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,bn,r.colorBgElevated,r.colorBgElevated,bn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},Sn,Pn=function(){return(0,n.jsx)(z.xB,{styles:(0,z.iv)(Sn||(Sn=d()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Mn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ie,{}),(0,n.jsx)(le,{}),(0,n.jsx)(Kn,{}),(0,n.jsx)(de,{}),(0,n.jsx)(D,{}),(0,n.jsx)(T,{}),(0,n.jsx)(dn,{}),(0,n.jsx)(vn,{}),(0,n.jsx)(ln,{}),(0,n.jsx)(J,{}),(0,n.jsx)(yn,{}),(0,n.jsx)(Pn,{}),(0,n.jsx)(re,{}),(0,n.jsx)(ae,{}),(0,n.jsx)(kn,{})]})},gn=Mn,Zn=a(97857),M=a.n(Zn),zn=a(9783),wn=a.n(zn),Nn=a(301210),Yn=a(660532),Jn=a(469181),pe=a(344682),ue=a(11739),me=a(664095),In=a(883458),Le=a(722449),Me=a(316165),he="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",ge="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",xe=function(e){return(0,n.jsx)(Me.Z,M()(M()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?he:ge})})}))},Qn=xe,fe=a(562925),nn=a(373638),En=a(438199),Ee,Te,Qt=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.headerHeight,i=e.colorTextHeading,l=e.fontFamily,p=e.mobileMaxWidth;return{logo:t(Ee||(Ee=d()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),o,i,l,o,i,p),title:t(Te||(Te=d()([`
      line-height: 32px;
    `])))}}),qt=function(e){var t=e.isZhCN,o=(0,c.TH)(),i=o.search,l=Qt(),p=l.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(c.rU,{to:nn.J1("/",t,i),className:p.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:p.title,children:"Ant Design"})]})})},_t=qt,no=a(280882),eo=a(963918),Tn=a(988872),Be,De,Ae,Pe,Ze=(0,L.kc)(function(r){var e=r.css,t=r.token;return{smallStyle:e(Be||(Be=d()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(De||(De=d()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Ae||(Ae=d()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Pe||(Pe=d()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),Ie=function(){var e=Ze(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(c._H,{id:"app.implementation.community"}),")"]})},He=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(c._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(Ie,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(Ie,{})]}),key:"vue"}]},to=function(e){var t=e.isRTL,o=Ze(),i=o.styles;return(0,n.jsx)(eo.Z,{menu:{items:He()},placement:"bottomRight",children:(0,n.jsxs)(Tn.ZP,{size:"small",children:[(0,n.jsx)(c._H,{id:"app.header.menu.more"}),(0,n.jsx)(no.Z,{className:C()(t?i.downOutlinedRTL:i.downOutlined,i.down)})]})})},oo=to,ro=a(719632),Bn=a.n(ro),Oe=a(923232),jn=a(472638),Fe,Re,ao={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},io=(0,L.kc)(function(r){var e=r.token,t=e.antCls,o=e.iconCls,i=e.fontFamily,l=e.headerHeight,p=e.menuItemBorder,u=e.colorPrimary,g=e.colorText;return{nav:(0,L.iv)(Fe||(Fe=d()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),i,t,t,t,40+12*2,l,l,p,g,t,o,t,u,t,t),popoverMenuNav:(0,L.iv)(Re||(Re=d()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),lo=function(r){var e,t,o,i=r.isZhCN,l=r.isMobile,p=r.responsive,u=r.directionText,g=r.onLangChange,m=r.onDirectionChange,f=(0,c.TH)(),b=f.pathname,y=f.search,j=(0,G.Z)(ao),E=S()(j,1),N=E[0],P=(0,c.yh)(),B=((e=P["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],v=io(),x=v.styles,I=l?"inline":"horizontal",K=b.split("/").filter(function(w){return w}).slice(0,-1).join("/"),H=K||"home";b.startsWith("/changelog")?H="docs/react":b.startsWith("/docs/resources")&&(H="docs/resources");var X,Y=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(c._H,{id:"app.header.lang"}),onClick:g,key:"switch-lang"},{label:u,onClick:m,key:"switch-direction"}].concat(Bn()(He()));l?X=Y:p==="crowded"&&(X=[{label:(0,n.jsx)(Yn.Z,{}),key:"additional",children:Bn()(Y)}]);var xn=[{label:(0,n.jsx)(jn.Z,{to:nn.J1("/docs/spec/introduce",i,y),children:N.design}),key:"docs/spec"},{label:(0,n.jsx)(jn.Z,{to:nn.J1("/docs/react/introduce",i,y),children:N.development}),key:"docs/react"},{label:(0,n.jsx)(jn.Z,{to:nn.J1("/components/overview/",i,y),children:N.components}),key:"components"},B.length?{label:(0,n.jsx)(jn.Z,{to:nn.J1(B.sort(function(w,F){return w.frontmatter.date>F.frontmatter.date?-1:1})[0].link,i,y),children:N.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(jn.Z,{to:nn.J1("/docs/resources",i,y),children:N.resources}),key:"docs/resources"},i?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(Bn()((o=X)!==null&&o!==void 0?o:[]));return(0,n.jsx)(Oe.Z,{mode:I,selectedKeys:[H],className:x.nav,disabledOverflow:!0,items:xn,style:{borderRight:0}})},$e=a(879587),We,Ue,Ge,Ve,Ke,Hn="1.2em",so=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.colorText,i=e.colorBorder,l=e.colorBgContainer,p=e.colorBgTextHover,u=e.borderRadius,g=e.controlHeight,m=e.motionDurationMid;return{btn:t(We||(We=d()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),o,i,g,g,u,m,m,p,Hn,Hn,Hn),innerDiv:t(Ue||(Ue=d()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Hn,Hn),labelStyle:t(Ge||(Ge=d()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Hn,o,o),label1Style:t(Ve||(Ve=d()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),o,l),label2Style:t(Ke||(Ke=d()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),co=function(e){var t=e.label1,o=e.label2,i=e.tooltip1,l=e.tooltip2,p=e.value,u=e.pure,g=e.onClick,m=so(),f=m.styles,b=f.btn,y=f.innerDiv,j=f.labelStyle,E=f.label1Style,N=f.label2Style,P=(0,n.jsx)("button",{onClick:g,className:b,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[u&&(p===1?t:o),!u&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("span",{className:C()(j,p===1?E:N),children:t}),(0,n.jsx)("span",{className:C()(j,p===1?N:E),children:o})]})]})},"lang-button");return i||l?(0,n.jsx)($e.Z,{title:p===1?i:l,children:P}):P},ve=co,Xe,Ye,Je,Qe,qe,_e,nt=1120,et=1200,po={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"}},uo=(0,L.kc)(function(r){var e=r.token,t=r.css,o="#ced4d9";return{header:t(Xe||(Xe=d()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,o,o,o),menuRow:t(Ye||(Ye=d()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(Je||(Je=d()([`
      width: 16px;
    `]))),popoverMenu:wn()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(Qe||(Qe=d()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(qe||(qe=d()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(_e||(_e=d()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),mo=function(){var e=(0,G.Z)(po),t=S()(e,2),o=t[0],i=t[1],l=(0,c.WF)(),p=l.pkg,u=(0,nn.Is)(),g=(0,h.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),m=S()(g,2),f=m[0],b=m[1],y=(0,h.useContext)(En.Z),j=y.direction,E=y.isMobile,N=y.bannerVisible,P=y.updateSiteConfig,B=(0,h.useRef)(null),v=(0,c.TH)(),x=v.pathname,I=v.search,K=uo(),H=K.styles,X=(0,h.useCallback)(function(){b(function(R){return M()(M()({},R),{},{menuVisible:!1})})},[]),Y=(0,h.useCallback)(function(){b(function(R){return M()(M()({},R),{},{windowWidth:window.innerWidth})})},[]),xn=(0,h.useCallback)(function(){b(function(R){return M()(M()({},R),{},{menuVisible:!0})})},[]),w=(0,h.useCallback)(function(R){b(function(fn){return M()(M()({},fn),{},{menuVisible:R})})},[]),F=function(){P({direction:j!=="rtl"?"rtl":"ltr"})},U=function(){P({bannerVisible:!1}),nn.Fy()&&localStorage.setItem(fe.ANT_DESIGN_NOT_SHOW_BANNER,tn()().toISOString())};(0,h.useEffect)(function(){X()},[v]),(0,h.useEffect)(function(){return Y(),window.addEventListener("resize",Y),function(){window.removeEventListener("resize",Y),B.current&&clearTimeout(B.current)}},[]);var Q=(0,h.useCallback)(function(R){var fn=window.location.href,te=window.location.pathname;if(/overview/.test(te)&&/0?[1-39][0-3]?x/.test(R)){window.location.href=fn.replace(window.location.origin,R).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(R)?"":"/react","/introduce")).replace(/\/$/,"");return}var Ne=new URL(fn.replace(window.location.origin,R));Ne.host.includes("antgroup")&&(window.location.href="".concat(Ne.href.replace(/\/$/,""),"/")),window.location.href=Ne.href.replace(/\/$/,"")},[]),q=(0,h.useCallback)(function(){var R="".concat(window.location.protocol,"//"),fn=window.location.href.slice(R.length);nn.Fy()&&localStorage.setItem("locale",nn.KE(x)?"en-US":"zh-CN"),window.location.href=R+fn.replace(window.location.pathname,nn.J1(x,!nn.KE(x),I).pathname)},[v]),ke=(0,h.useMemo)(function(){return j!=="rtl"?"RTL":"LTR"},[j]),A=(0,h.useMemo)(function(){return j==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[j]),Z=f.menuVisible,$=f.windowWidth,On=f.searching,Vt=M()(wn()({},p.version,p.version),u==null?void 0:u.docVersions),Pr=Object.keys(Vt).map(function(R){return{value:Vt[R],label:R}}),Kt=["","index","index-cn"].includes(x),Xt=i==="cn",Zr=j==="rtl",Se=null;$<nt?Se="crowded":$<et&&(Se="narrow");var Ir=C()(H.header,"clearfix",{"home-header":Kt}),ze={isZhCN:Xt,isRTL:Zr},Yt=(0,n.jsx)(lo,M()(M()({},ze),{},{responsive:Se,isMobile:E,directionText:ke,onLangChange:q,onDirectionChange:F}),"nav"),Wn=[Yt,(0,n.jsx)(Jn.Z,{className:"version",size:"small",defaultValue:p.version,onChange:Q,dropdownStyle:A,popupMatchSelectWidth:!1,getPopupContainer:function(fn){return fn.parentNode},options:Pr},"version"),(0,n.jsx)(oo,M()({},ze),"more"),(0,n.jsx)(ve,{onClick:q,value:nn.KE(x)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(ve,{onClick:F,value:j==="rtl"?2:1,label1:(0,n.jsx)(Qn,{className:H.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Qn,{className:H.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(ve,{value:1,label1:(0,n.jsx)(Nn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];$<nt?Wn=On?[]:[Yt]:$<et&&(Wn=On?[]:Wn);var Jt=Kt?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Ir,children:[E&&(0,n.jsx)(pe.Z,{overlayClassName:H.popoverMenu,placement:"bottomRight",content:Wn,trigger:"click",open:Z,arrow:{arrowPointAtCenter:!0},onOpenChange:w,children:(0,n.jsx)(Yn.Z,{className:"nav-phone-icon",onClick:xn})}),Xt&&N&&(0,n.jsx)(on.ZP,{theme:{token:{colorInfoBg:"#daf5eb",colorTextBase:"#000"}},children:(0,n.jsx)(ue.Z,{className:H.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:H.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),(0,n.jsx)("span",{children:E?o.shortMessage:o.message}),(0,n.jsx)("a",{className:H.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var fn,te;(fn=(te=window).gtag)===null||fn===void 0||fn.call(te,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:o.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:U})}),(0,n.jsxs)(me.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(In.Z,M()(M()({},Jt[0]),{},{children:(0,n.jsx)(_t,M()(M()({},ze),{},{location:v}))})),(0,n.jsxs)(In.Z,M()(M()({},Jt[1]),{},{className:H.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Le.ZP,{})}),!E&&Wn]}))]})]})},ho=mo,Hr=a(945462),go=a(513769),xo=a.n(go),fo=a(857278),vo=a(430932),bo=a(985093),qn=a(115668),yo=a(642207),tt=a(13923),be=a(825035),wo=a(937993),jo=a(448118),Co=a(938545),ko=a(569980),So=a(391298),zo=a(630770),ot=a(693399),_n="ant-where-checker",No={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Lo(){var r=(0,G.Z)(No),e=S()(r,1),t=e[0],o=h.useState(!0),i=S()(o,2),l=i[0],p=i[1];return h.useEffect(function(){var u=document.createElement("p");u.className=_n,u.style.position="fixed",u.style.pointerEvents="none",u.style.visibility="hidden",u.style.width="0",document.body.appendChild(u),(0,ot.updateCSS)(`
:where(.`.concat(_n,`) {
  content: "__CHECK__";
}
    `),_n);var g=getComputedStyle(u),m=g.content;p(String(m).includes("CHECK")),document.body.removeChild(u),(0,ot.removeCSS)(_n)},[]),l?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var rt,at,Mo={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Eo=function(){var e=(0,h.useContext)(En.Z),t=e.isMobile;return(0,L.kc)(function(o){var i=o.token,l=o.css,p=new An.C((0,zo.Z)("#f0f3fa","#fff")).onBackground(i.colorBgContainer).toHexString();return{holder:l(rt||(rt=d()([`
      background: `,`;
    `])),p),footer:l(at||(at=d()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),p,i.colorTextSecondary,i.colorText,t?60:0,t?20:0,i.marginXXL,i.fontSize)}})()},To=function(){var e=(0,rn.Z)(),t=(0,G.Z)(Mo),o=S()(t,2),i=o[0],l=o[1],p=Eo(),u=p.styles,g=e.getLink,m=h.useMemo(function(){var f=l==="cn",b={title:(0,n.jsx)(c._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:f?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:f?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:f?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(c._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(c._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(c._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(c._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(c._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(c._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(c._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(c._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},y={title:(0,n.jsx)(c._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(fo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(vo.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(bo.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(c._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(c._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};f&&y.items.push({icon:(0,n.jsx)(yo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.work_with_us"}),url:g("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:c.rU});var j={title:(0,n.jsx)(c._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Nn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(tt.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.change-log"}),url:g("/changelog"),LinkComponent:c.rU},{icon:(0,n.jsx)(be.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.faq"}),url:g("/docs/react/faq"),LinkComponent:c.rU},{icon:(0,n.jsx)(wo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(jo.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Co.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(be.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(be.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},E={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(c._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(c._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(c._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(c._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(c._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(c._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(c._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(ko.Z,{}),title:(0,n.jsx)(c._H,{id:"app.footer.theme"}),url:g("/theme-editor"),LinkComponent:c.rU}]};return[b,y,j,E]},[l,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(So.Z,{columns:m,className:u.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:i.owner})]})}),(0,n.jsx)(Lo,{})]})},ye=To,Bo=["children"],Do=function(e){var t=e.children,o=xo()(e,Bo);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:o.title}),(0,n.jsx)("meta",{property:"og:title",content:o.title}),o.desc&&(0,n.jsx)("meta",{name:"description",content:o.desc})]}),(0,n.jsx)("div",{style:{minHeight:"100vh"},children:t}),(0,n.jsx)(ye,{})]})},Ao=Do,Po=a(377376),ne=a(185209),Zo=function(){var e=(0,c.eL)(),t=(0,h.useMemo)(function(){var p;if(!e.frontmatter.subtitle&&!e.frontmatter.title)p="404 Not Found - Ant Design";else{var u;p="".concat(e.frontmatter.subtitle||""," ").concat(((u=e.frontmatter)===null||u===void 0?void 0:u.title)||""," - Ant Design")}var g=e.frontmatter.description||"";return[p,g]},[e]),o=S()(t,2),i=o[0],l=o[1];return(0,n.jsxs)(c.ql,{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{property:"og:title",content:i}),l&&(0,n.jsx)("meta",{name:"description",content:l})]})},it=Zo,lt=a(148050),Io=a(823493),Ho=a.n(Io),Oo=a(468990),Fo=a(658192),st,ct,dt,pt=["scroll","resize"],Ro=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.boxShadowSecondary,i=e.antCls;return{affixTabs:t(st||(st=d()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),o,i,i,i),affixTabsFixed:t(ct||(ct=d()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(dt||(dt=d()([`
      text-transform: capitalize;
    `])))}}),ut=32,$o=function(){var e=h.useRef(null),t=h.useRef([]),o=h.useState(!1),i=S()(o,2),l=i[0],p=i[1],u=h.useState(null),g=S()(u,2),m=g[0],f=g[1],b=Ro(),y=b.styles,j=y.affixTabs,E=y.affixTabsFixed,N=y.span;function P(v){var x=document.getElementById(v);if(x){var I=x.offsetTop-e.current.offsetHeight-ut;(0,Fo.Z)(I)}}h.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(v){var x=v.id;return x}),p(!0)},[]),h.useEffect(function(){var v=decodeURIComponent((location.hash||"").slice(1));v&&P(v)},[l]);var B=h.useMemo(function(){function v(){for(var x=window,I=x.scrollY,K=e.current.offsetHeight,H=t.current.length-1;H>=0;H-=1){var X=t.current[H],Y=document.getElementById(X),xn=Y.offsetTop-K-ut;if(xn<=I){f(X);return}}f(null)}return Ho()(v)},[]);return h.useEffect(function(){return pt.forEach(function(v){return window.addEventListener(v,B)}),B(),function(){pt.forEach(function(v){return window.removeEventListener(v,B)})}},[]),(0,n.jsx)("div",{className:C()(j,m&&E),ref:e,children:(0,n.jsx)(Oo.Z,{activeKey:m,onChange:P,items:t.current.map(function(v){return{key:v,label:(0,n.jsx)("span",{className:N,children:v.replace(/-/g," ")})}})})})},Wo=$o,mt,ht,gt,xt=40,ee=1208,we=24,Uo=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{resourcePage:t(mt||(mt=d()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),ee),resourceContent:t(ht||(ht=d()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),xt,ee,we,o),banner:t(gt||(gt=d()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),xt,ee,ee,we,we)}}),Go=function(e){var t,o=e.children,i=Uo(),l=i.styles,p=(0,c.eL)();return(0,n.jsx)(on.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Po.Z,{children:[(0,n.jsx)(it,{}),(0,n.jsxs)("div",{id:"resources-page",className:l.resourcePage,children:[(0,n.jsx)(Wo,{}),(0,n.jsxs)("div",{className:l.banner,children:[(0,n.jsxs)(ne.Z.Title,{style:{fontSize:30},children:[(t=p.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(lt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,n.jsx)("section",{children:p.frontmatter.description})]}),(0,n.jsx)("div",{className:l.resourceContent,children:o}),(0,n.jsx)(ye,{})]})]})})},Vo=Go,Ko=a(720841),Xo=a(538294),ft=a(575054),vt=a(796586),Yo=a(605071),je=a(209269),Jo=a(217187),$n=a(618073),bt=a(206171),Qo=a(844183),qo=a(566254),_o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,c.yh)(),o=(0,rn.Z)(),i=o.pathname,l=o.search,p=(0,c.tx)(),u=e.before,g=e.after,m=(0,h.useMemo)(function(){var f,b=Bn()(p!=null?p:[]);if(i.startsWith("/docs/spec")){var y=b.splice(0,1);b.push.apply(b,Bn()(y))}if(i.startsWith("/docs/react")){var j,E=(j=Object.entries(t).find(function(v){var x=S()(v,1),I=x[0];return I.startsWith("/changelog")}))===null||j===void 0?void 0:j[1];E&&b.splice(1,0,E[0])}if(i.startsWith("/changelog")){var N,P=(N=Object.entries(t).find(function(v){var x=S()(v,1),I=x[0];return I.startsWith("/docs/react")}))===null||N===void 0?void 0:N[1];P&&(b.unshift(P[0]),b.push.apply(b,Bn()(P.slice(1))))}var B=function(x){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return x&&I&&(0,n.jsx)(Qo.Z,{color:x==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:x.replace("VERSION",qo.Z)})};return(f=b==null?void 0:b.reduce(function(v,x){if(x!=null&&x.title)if(i.startsWith("/docs/spec")){var I,K,H=x.children.reduce(function(w,F){var U,Q,q=(U=(Q=F.frontmatter)===null||Q===void 0?void 0:Q.type)!==null&&U!==void 0?U:"default";return w[q]||(w[q]=[]),w[q].push(F),w},{}),X=[];X.push.apply(X,Bn()((I=(K=H.default)===null||K===void 0?void 0:K.map(function(w){return{label:(0,n.jsxs)(jn.Z,{to:"".concat(w.link).concat(l),children:[u,w==null?void 0:w.title,g]}),key:w.link.replace(/(-cn$)/g,"")}}))!==null&&I!==void 0?I:[])),Object.entries(H).forEach(function(w){var F=S()(w,2),U=F[0],Q=F[1];U!=="default"&&X.push({type:"group",label:U,key:U,children:Q==null?void 0:Q.map(function(q){return{label:(0,n.jsxs)(jn.Z,{to:"".concat(q.link).concat(l),children:[u,q==null?void 0:q.title,g]}),key:q.link.replace(/(-cn$)/g,"")}})})}),v.push({label:x==null?void 0:x.title,key:x==null?void 0:x.title,children:X})}else{var Y;v.push({type:"group",label:x==null?void 0:x.title,key:x==null?void 0:x.title,children:(Y=x.children)===null||Y===void 0?void 0:Y.map(function(w){var F,U;return{label:(0,n.jsxs)(jn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[u,(0,n.jsx)("span",{children:w==null?void 0:w.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(F=w.frontmatter)===null||F===void 0?void 0:F.subtitle},"chinese"),B((U=w.frontmatter)===null||U===void 0?void 0:U.tag,!u&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})})}else{var xn=x.children||[];xn.every(function(w){var F;return w==null||(F=w.frontmatter)===null||F===void 0?void 0:F.date})&&xn.sort(function(w,F){var U,Q;return((U=w.frontmatter)===null||U===void 0?void 0:U.date)>((Q=F.frontmatter)===null||Q===void 0?void 0:Q.date)?-1:1}),v.push.apply(v,Bn()(xn.map(function(w){return{label:(0,n.jsxs)(jn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[u,w==null?void 0:w.title,B(w.frontmatter.tag,!u&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})))}return v},[]))!==null&&f!==void 0?f:[]},[p,t,i,l,e]);return[m,i]},yt=_o,wt,jt,Ct,kt,nr=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.colorSplit,i=e.iconCls,l=e.fontSizeIcon;return{prevNextNav:t(wt||(wt=d()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),o),pageNav:t(jt||(jt=d()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),i,l),prevNav:t(Ct||(Ct=d()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(kt||(kt=d()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),er=function r(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var i;return t.concat((i=r(o.children))!==null&&i!==void 0?i:[])}return t.concat(o)},[]):null},tr=function(e){var t=e.rtl,o=nr(),i=o.styles,l={className:"footer-nav-icon-before"},p={className:"footer-nav-icon-after"},u=t?(0,n.jsx)($n.Z,M()({},l)):(0,n.jsx)(bt.Z,M()({},l)),g=t?(0,n.jsx)(bt.Z,M()({},p)):(0,n.jsx)($n.Z,M()({},p)),m=yt({before:u,after:g}),f=S()(m,2),b=f[0],y=f[1],j=(0,h.useContext)(En.Z),E=j.isMobile,N=(0,h.useMemo)(function(){var x=er(b);if(!x)return[null,null];var I=-1;return x.forEach(function(K,H){K&&K.key===y&&(I=H)}),[x[I-1],x[I+1]]},[b,y]),P=S()(N,2),B=P[0],v=P[1];return E?null:(0,n.jsxs)("section",{className:i.prevNextNav,children:[B&&h.cloneElement(B.label,{className:C()(i.pageNav,i.prevNav,B.className)}),v&&h.cloneElement(v.label,{className:C()(i.pageNav,i.nextNav,v.className)})]})},or=tr,rr=a(302281),ar=a(15060),ir=a(889812),St,zt,Nt,lr=(0,L.kc)(function(r){var e=r.token,t=r.css;return{history:t(St||(St=d()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(zt||(zt=d()([`
    // white-space: pre;
  `]))),ref:t(Nt||(Nt=d()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),sr={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function cr(r){var e=r.changelog,t=e===void 0?"":e,o=r.refs,i=o===void 0?[]:o,l=r.styles,p=h.useMemo(function(){for(var u=[],g=!1,m="",f=0;f<t.length;f+=1){var b=t[f];if(b!=="`")m+=b;else{var y=m;g&&(y=(0,n.jsx)("code",{children:y})),u.push(y),m="",g=!g}}return u.push(m),u},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:p}),i==null?void 0:i.map(function(u){var g;return(0,n.jsxs)("a",{className:l.ref,href:u,target:"_blank",rel:"noreferrer",children:["#",(g=u.match(/^.*\/(\d+)$/))===null||g===void 0?void 0:g[1]]},u)})]})}function dr(r,e){var t=(0,ir.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return a.e(2104).then(a.t.bind(a,332104,19))}}:{key:"component-changelog-en",request:function(){return a.e(5212).then(a.t.bind(a,365212,19))}});return(0,h.useMemo)(function(){var o=r.replace(/-/g,""),i=Object.keys(t).find(function(l){return l.toLowerCase()===o.toLowerCase()});return t[i]},[t,r])}function pr(r){var e,t=r.pathname,o=t===void 0?"":t,i=(0,G.Z)(sr),l=S()(i,2),p=l[0],u=l[1],g=h.useState(!1),m=S()(g,2),f=m[0],b=m[1],y=lr(),j=y.styles,E=((e=o.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",N=dr(E,u),P=h.useMemo(function(){var B={};return N==null||N.forEach(function(v){B[v.version]=B[v.version]||[],B[v.version].push(v)}),Object.keys(B).map(function(v){var x=B[v];return{children:(0,n.jsxs)(ne.Z,{children:[(0,n.jsx)("h4",{children:v}),(0,n.jsx)("ul",{children:x.map(function(I,K){return(0,n.jsx)("li",{className:j.li,children:(0,n.jsx)(cr,M()(M()({},I),{},{styles:j}))},K)})})]})}})},[N]);return!N||!N.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Tn.ZP,{className:j.history,icon:(0,n.jsx)(tt.Z,{}),onClick:function(){b(!0)},children:p.changelog}),(0,n.jsx)(rr.Z,{title:p.changelog,extra:(0,n.jsx)(jn.Z,{style:{fontSize:14},to:"/changelog".concat(u==="cn"?"-cn":""),children:p.full}),open:f,width:"40vw",onClose:function(){b(!1)},destroyOnClose:!0,children:(0,n.jsx)(ar.Z,{items:P})})]})}var ur=function(r){return(0,n.jsx)(h.Suspense,{fallback:null,children:(0,n.jsx)(pr,M()({},r))})},mr=a(524229),Lt=a(211646),hr=a(294047),Mt=a(315816),gr=function(e){var t=e.className,o=e.style;return(0,n.jsx)("svg",{className:t,style:o,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Et=gr,Tt,Bt,Dt,At,Pt,Zt,It,Ce="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",xr=(0,L.kc)(function(r){var e=r.token,t=r.css;return{card:t(Tt||(Tt=d()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Bt||(Bt=d()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Dt||(Dt=d()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(At||(At=d()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Pt||(Pt=d()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Zt||(Zt=d()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(It||(It=d()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),fr={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},vr=function(e){var t=e.zhihuLink,o=e.yuqueLink,i=e.juejinLink,l=(0,G.Z)(fr),p=S()(l,1),u=p[0],g=xr(),m=g.styles,f=m.card,b=m.bigTitle,y=m.cardBody,j=m.left,E=m.title,N=m.subTitle,P=m.btn;return!t&&!o&&!i?null:(0,n.jsxs)(hr.Z,{className:f,bordered:!1,children:[(0,n.jsx)("h3",{className:b,children:u.bigTitle}),t&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:E,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(qn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(Tn.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:u.zhiHu})]})]})]}),(0,n.jsx)(Tn.ZP,{type:"primary",className:P,icon:(0,n.jsx)(qn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:u.buttonText})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Mt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:E,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(Lt.Z,{className:"logo yuque-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(Tn.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:u.yuQue})]})]})]}),(0,n.jsx)(Tn.ZP,{type:"primary",className:P,icon:(0,n.jsx)(Lt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:u.buttonText})]})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Mt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:E,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(Et,{className:"logo juejin-logo"}),(0,n.jsx)($n.Z,{className:"arrowIcon"}),(0,n.jsx)(Tn.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:u.junjin})]})]})]}),(0,n.jsx)(Tn.ZP,{type:"primary",className:P,icon:(0,n.jsx)(Et,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:i,children:u.buttonText})]})]})]})},br=vr,Ht,Ot,Ft,Rt,$t,yr=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{contributorsList:t(Ht||(Ht=d()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),o,o,e.motionDurationSlow,o),listMobile:t(Ot||(Ot=d()([`
      margin: 1em 0 !important;
    `]))),toc:t(Ft||(Ft=d()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),o,o),tocWrapper:t(Rt||(Rt=d()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t($t||($t=d()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),wr=function(e){var t=e.num,o=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:o}).map(function(i,l){return(0,n.jsx)(ft.Z.Avatar,{size:"small",active:!0,style:{marginLeft:l===0?0:-8}},l)})})},jr=function(e){var t=e.name,o=e.avatar,i=(0,h.useState)(!0),l=S()(i,2),p=l[0],u=l[1],g=(0,h.useState)(!1),m=S()(g,2),f=m[0],b=m[1];return(0,h.useLayoutEffect)(function(){var y=new Image;y.src=o,y.onload=function(){return u(!1)},y.onerror=function(){return b(!0)}},[]),f?null:p?(0,n.jsx)(ft.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(vt.C,{size:"small",src:o,alt:t,children:t})},Cr=function(e){var t,o,i,l,p,u,g=e.children,m=(0,c.eL)(),f=(0,c.zh)(),b=(0,rn.Z)(),y=b.pathname,j=b.hash,E=(0,c.YB)(),N=E.formatMessage,P=yr(),B=P.styles,v=(0,L.Fg)(),x=(0,h.useContext)(En.Z),I=x.direction,K=x.isMobile,H=(0,Jo.Z)(!1),X=S()(H,2),Y=X[0],xn=X[1],w=(0,h.useMemo)(function(){var A;return((A=m.toc)===null||A===void 0?void 0:A.filter(function(Z){return Z._debug_demo}).map(function(Z){return Z.id}))||[]},[m]),F=w.includes(j.slice(1));(0,h.useLayoutEffect)(function(){xn(F)},[]);var U=(0,h.useMemo)(function(){return{showDebug:Y,setShowDebug:xn}},[Y,w]),Q=(0,h.useMemo)(function(){return((f==null?void 0:f.toc)||m.toc).reduce(function(A,Z){if(Z.depth===2)A.push(M()({},Z));else if(Z.depth===3){var $=A[A.length-1];$&&($.children=$.children||[],$.children.push(M()({},Z)))}return A},[])},[f==null?void 0:f.toc,m.toc]),q=I==="rtl",ke=(0,h.useMemo)(function(){var A=m.frontmatter.author;return A?typeof A=="string"?A.split(",").map(function(Z){return{name:Z,avatar:"https://github.com/".concat(Z,".png")}}):Array.isArray(A)?A:[]:[]},[m.frontmatter.author]);return(0,n.jsx)(mr.Z.Provider,{value:U,children:(0,n.jsxs)(In.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!m.frontmatter.toc&&(0,n.jsx)("section",{className:B.tocWrapper,children:(0,n.jsx)(Yo.Z,{className:B.toc,affix:!1,targetOffset:v.anchorTop,showInkInFixed:!0,items:Q.map(function(A){var Z;return{href:"#".concat(A.id),title:A.title,key:A.id,children:(Z=A.children)===null||Z===void 0?void 0:Z.filter(function($){return Y||!w.includes($.id)}).map(function($){return{key:$.id,href:"#".concat($.id),title:(0,n.jsx)("span",{className:C()(w.includes($.id)&&"toc-debug"),children:$==null?void 0:$.title})}})}})})}),(0,n.jsxs)("article",{className:C()(B.articleWrapper,{rtl:q}),children:[(t=m.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(ne.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(je.Z,{size:"small",children:[(o=m.frontmatter)===null||o===void 0?void 0:o.title,(i=m.frontmatter)===null||i===void 0?void 0:i.subtitle,!y.startsWith("/components/overview")&&(0,n.jsx)(lt.Z,{title:(0,n.jsx)(c._H,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})]}),y.startsWith("/components/")&&(0,n.jsx)(ur,{pathname:y})]}):null,m.frontmatter.date||m.frontmatter.author?(0,n.jsx)(ne.Z.Paragraph,{children:(0,n.jsxs)(je.Z,{children:[m.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Ko.Z,{})," ",tn()(m.frontmatter.date).format("YYYY-MM-DD")]}),ke.map(function(A){return(0,n.jsx)("a",{href:"https://github.com/".concat(A.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(je.Z,{size:3,children:[(0,n.jsx)(jr,{name:A.name,avatar:A.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",A.name]})]})},A.name)})]})}):null,!m.frontmatter.__autoDescription&&m.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:g}),(((l=m.frontmatter)===null||l===void 0?void 0:l.zhihu_url)||((p=m.frontmatter)===null||p===void 0?void 0:p.yuque_url)||((u=m.frontmatter)===null||u===void 0?void 0:u.juejin_url))&&(0,n.jsx)(br,{zhihuLink:m.frontmatter.zhihu_url,yuqueLink:m.frontmatter.yuque_url,juejinLink:m.frontmatter.juejin_url}),m.frontmatter.filename&&(0,n.jsx)(Xo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:C()(B.contributorsList,wn()({},B.listMobile,K)),fileName:m.frontmatter.filename,renderItem:function(Z,$){var On;return!Z||$?(0,n.jsx)(wr,{}):(On=Z.username)!==null&&On!==void 0&&On.includes("github-actions")?null:(0,n.jsx)($e.Z,{mouseEnterDelay:.3,title:"".concat(N({id:"app.content.contributors"}),": ").concat(Z.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(Z.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(vt.C,{size:"small",src:Z.url,alt:Z.username,children:Z.username})})})},Z.username)}})]}),(0,n.jsx)(or,{rtl:q}),(0,n.jsx)(ye,{})]})})},kr=Cr,Sr=a(650010),Wt,Ut,zr=(0,L.kc)(function(r){var e=r.token,t=r.css,o=e.antCls,i=e.fontFamily,l=e.colorSplit;return{asideContainer:t(Wt||(Wt=d()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),i,o,o,o,o,o,o,l,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),mainMenu:t(Ut||(Ut=d()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),Nr=function(){var e=(0,c.tx)(),t=(0,h.useContext)(En.Z),o=t.isMobile,i=t.theme,l=zr(),p=l.styles,u=yt(),g=S()(u,2),m=g[0],f=g[1],b=i.includes("dark"),y=(0,L.Fg)(),j=y.colorBgContainer,E=(0,n.jsx)(on.ZP,{theme:{components:{Menu:{itemBg:j,darkItemBg:j}}},children:(0,n.jsx)(Oe.Z,{items:m,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:b?"dark":"light",selectedKeys:[f],defaultOpenKeys:e==null?void 0:e.map(function(N){var P=N.title;return P}).filter(function(N){return N})})});return o?(0,n.jsx)(Sr.Z,{children:E},"Mobile-menu"):(0,n.jsx)(In.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:E})})},Lr=Nr,Gt,Mr=(0,L.kc)(function(r){var e=r.css,t=r.token;return{main:e(Gt||(Gt=d()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Er=function(e){var t=e.children,o=Mr(),i=o.styles;return(0,n.jsxs)("main",{className:i.main,children:[(0,n.jsx)(it,{}),(0,n.jsx)(Lr,{}),(0,n.jsx)(kr,{children:t})]})},Tr=Er,Br={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Dr=function(){var e=(0,c.pC)(),t=(0,rn.Z)(),o=t.pathname,i=t.search,l=(0,G.Z)(Br),p=S()(l,2),u=p[0],g=p[1],m=(0,h.useRef)(null),f=(0,h.useContext)(En.Z),b=f.direction;(0,h.useLayoutEffect)(function(){g==="cn"?tn().locale("zh-cn"):tn().locale("en")},[]),(0,h.useEffect)(function(){var j=document.getElementById("nprogress-style");j&&(m.current=setTimeout(function(){var E;(E=j.parentNode)===null||E===void 0||E.removeChild(j)},0))},[]),(0,h.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",o+i)},[t]);var y=(0,h.useMemo)(function(){return["","/"].some(function(j){return j===o})||["/index"].some(function(j){return o.startsWith(j)})?(0,n.jsx)(Ao,{title:u.title,desc:u.description,children:e}):o.startsWith("/docs/resource")?(0,n.jsx)(Vo,{children:e}):o.startsWith("/theme-editor")?e:(0,n.jsx)(Tr,{children:e})},[o,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":b,className:C()({rtl:b==="rtl"})}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{property:"og:description",content:u.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(on.ZP,{direction:b,locale:g==="cn"?W.Z:void 0,children:[(0,n.jsx)(gn,{}),(0,n.jsx)(ho,{}),y]})]})},Ar=Dr},647727:function(Fn,cn,a){a.d(cn,{Z:function(){return _.Z}});var _=a(582485)},302281:function(Fn,cn,a){a.d(cn,{Z:function(){return de}});var _=a(97857),S=a.n(_),en=a(9783),C=a.n(en),Dn=a(805574),tn=a.n(Dn),Cn=a(513769),c=a.n(Cn),h=a(667294),W=a(294184),on=a.n(W),G=a(650010),rn=a(851863),Ln=a(73287),d=a(976883),z=a(578294),L=a(358245),n=a(46287),V=a(785893),oe=function(s){var D=s.prefixCls,k=s.title,T=s.footer,O=s.extra,dn=s.closeIcon,pn=s.closable,vn=s.onClose,un=s.headerStyle,ln=s.drawerStyle,sn=s.bodyStyle,J=s.footerStyle,mn=s.children,yn=h.useCallback(function(gn){return(0,V.jsx)("button",{type:"button",onClick:vn,"aria-label":"Close",className:"".concat(D,"-close"),children:gn})},[vn]),hn=(0,n.Z)(pn,dn,yn,void 0,!0),bn=tn()(hn,2),kn=bn[0],Sn=bn[1],Pn=h.useMemo(function(){return!k&&!kn?null:(0,V.jsxs)("div",{style:un,className:on()("".concat(D,"-header"),C()({},"".concat(D,"-header-close-only"),kn&&!k&&!O)),children:[(0,V.jsxs)("div",{className:"".concat(D,"-header-title"),children:[Sn,k&&(0,V.jsx)("div",{className:"".concat(D,"-title"),children:k})]}),O&&(0,V.jsx)("div",{className:"".concat(D,"-extra"),children:O})]})},[kn,Sn,O,un,D,k]),Mn=h.useMemo(function(){if(!T)return null;var gn="".concat(D,"-footer");return(0,V.jsx)("div",{className:gn,style:J,children:T})},[T,J,D]);return(0,V.jsxs)("div",{className:"".concat(D,"-wrapper-body"),style:ln,children:[Pn,(0,V.jsx)("div",{className:"".concat(D,"-body"),style:sn,children:mn}),Mn]})},Un=oe,re=a(141035),Gn=a(986943),ae=function(s){var D,k=s.componentCls,T=s.motionDurationSlow,O={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(T)}}};return C()({},k,(D={},C()(D,"".concat(k,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(T)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),C()(D,"".concat(k,"-panel-motion"),{"&-left":[O,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[O,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[O,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[O,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),D))},Vn=ae,ie=function(s){var D,k,T=s.componentCls,O=s.zIndexPopup,dn=s.colorBgMask,pn=s.colorBgElevated,vn=s.motionDurationSlow,un=s.motionDurationMid,ln=s.padding,sn=s.paddingLG,J=s.fontSizeLG,mn=s.lineHeightLG,yn=s.lineWidth,hn=s.lineType,bn=s.colorSplit,kn=s.marginSM,Sn=s.colorIcon,Pn=s.colorIconHover,Mn=s.colorText,gn=s.fontWeightStrong,Zn=s.footerPaddingBlock,M=s.footerPaddingInline,zn="".concat(T,"-content-wrapper");return C()({},T,(k={position:"fixed",inset:0,zIndex:O,pointerEvents:"none","&-pure":(D={position:"relative",background:pn},C()(D,"&".concat(T,"-left"),{boxShadow:s.boxShadowDrawerLeft}),C()(D,"&".concat(T,"-right"),{boxShadow:s.boxShadowDrawerRight}),C()(D,"&".concat(T,"-top"),{boxShadow:s.boxShadowDrawerUp}),C()(D,"&".concat(T,"-bottom"),{boxShadow:s.boxShadowDrawerDown}),D),"&-inline":{position:"absolute"}},C()(k,"".concat(T,"-mask"),{position:"absolute",inset:0,zIndex:O,background:dn,pointerEvents:"auto"}),C()(k,zn,{position:"absolute",zIndex:O,maxWidth:"100vw",transition:"all ".concat(vn),"&-hidden":{display:"none"}}),C()(k,"&-left > ".concat(zn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft}),C()(k,"&-right > ".concat(zn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight}),C()(k,"&-top > ".concat(zn),{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp}),C()(k,"&-bottom > ".concat(zn),{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown}),C()(k,"".concat(T,"-content"),{width:"100%",height:"100%",overflow:"auto",background:pn,pointerEvents:"auto"}),C()(k,"".concat(T,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),C()(k,"".concat(T,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(ln,"px ").concat(sn,"px"),fontSize:J,lineHeight:mn,borderBottom:"".concat(yn,"px ").concat(hn," ").concat(bn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),C()(k,"".concat(T,"-extra"),{flex:"none"}),C()(k,"".concat(T,"-close"),{display:"inline-block",marginInlineEnd:kn,color:Sn,fontWeight:gn,fontSize:J,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(un),textRendering:"auto","&:focus, &:hover":{color:Pn,textDecoration:"none"}}),C()(k,"".concat(T,"-title"),{flex:1,margin:0,color:Mn,fontWeight:s.fontWeightStrong,fontSize:J,lineHeight:mn}),C()(k,"".concat(T,"-body"),{flex:1,minWidth:0,minHeight:0,padding:sn,overflow:"auto"}),C()(k,"".concat(T,"-footer"),{flexShrink:0,padding:"".concat(Zn,"px ").concat(M,"px"),borderTop:"".concat(yn,"px ").concat(hn," ").concat(bn)}),C()(k,"&-rtl",{direction:"rtl"}),k))},Rn=(0,re.Z)("Drawer",function(an){var s=(0,Gn.TS)(an,{});return[ie(s),Vn(s)]},function(an){return{zIndexPopup:an.zIndexPopupBase,footerPaddingBlock:an.paddingXS,footerPaddingInline:an.padding}}),le=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],An=["prefixCls","style","className","placement"],se=null,ce={distance:180},Kn=function(s){var D=s.rootClassName,k=s.width,T=s.height,O=s.size,dn=O===void 0?"default":O,pn=s.mask,vn=pn===void 0?!0:pn,un=s.push,ln=un===void 0?ce:un,sn=s.open,J=s.afterOpenChange,mn=s.onClose,yn=s.prefixCls,hn=s.getContainer,bn=s.style,kn=s.className,Sn=s.visible,Pn=s.afterVisibleChange,Mn=c()(s,le),gn=h.useContext(Ln.E_),Zn=gn.getPopupContainer,M=gn.getPrefixCls,zn=gn.direction,wn=gn.drawer,Nn=M("drawer",yn),Yn=Rn(Nn),Jn=tn()(Yn,2),pe=Jn[0],ue=Jn[1],me=hn===void 0&&Zn?function(){return Zn(document.body)}:hn,In=on()(C()({"no-mask":!vn},"".concat(Nn,"-rtl"),zn==="rtl"),D,ue);if(!1)var Le,Me;var he=h.useMemo(function(){return k!=null?k:dn==="large"?736:378},[k,dn]),ge=h.useMemo(function(){return T!=null?T:dn==="large"?736:378},[T,dn]),xe={motionName:(0,rn.m)(Nn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Qn=function(En){return{motionName:(0,rn.m)(Nn,"panel-motion-".concat(En)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},fe=(0,L.H)();return pe((0,V.jsx)(z.BR,{children:(0,V.jsx)(d.Ux,{status:!0,override:!0,children:(0,V.jsx)(G.Z,S()(S()({prefixCls:Nn,onClose:mn,maskMotion:xe,motion:Qn},Mn),{},{open:sn!=null?sn:Sn,mask:vn,push:ln,width:he,height:ge,style:S()(S()({},wn==null?void 0:wn.style),bn),className:on()(wn==null?void 0:wn.className,kn),rootClassName:In,getContainer:me,afterOpenChange:J!=null?J:Pn,panelRef:fe,children:(0,V.jsx)(Un,S()(S()({prefixCls:Nn},Mn),{},{onClose:mn}))}))})}))},Xn=function(s){var D=s.prefixCls,k=s.style,T=s.className,O=s.placement,dn=O===void 0?"right":O,pn=c()(s,An),vn=h.useContext(Ln.E_),un=vn.getPrefixCls,ln=un("drawer",D),sn=Rn(ln),J=tn()(sn,2),mn=J[0],yn=J[1],hn=on()(ln,"".concat(ln,"-pure"),"".concat(ln,"-").concat(dn),yn,T);return mn((0,V.jsx)("div",{className:hn,style:k,children:(0,V.jsx)(Un,S()({prefixCls:ln},pn))}))};Kn._InternalPanelDoNotUseOrYouWillBeFired=Xn;var de=Kn},377376:function(Fn,cn,a){var _=a(83996),S=a(296708),en=_.ZP;en.Header=_.h4,en.Footer=_.$_,en.Content=_.VY,en.Sider=S.Z,cn.Z=en},715778:function(Fn,cn,a){a.d(cn,{Z:function(){return G}});var _=a(174219),S=a(97857),en=a.n(S),C=a(585369),Dn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},tn=Dn,Cn={lang:en()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},C.Z),timePickerLocale:en()({},tn)};Cn.lang.ok="\u786E\u5B9A";var c=Cn,h=c,W="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",on={locale:"zh-cn",Pagination:_.Z,DatePicker:c,TimePicker:tn,Calendar:h,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:W,method:W,array:W,object:W,number:W,date:W,boolean:W,integer:W,float:W,regexp:W,email:W,url:W,hex:W},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},G=on}}]);
