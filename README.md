# LATA

A game by Jonathan Blackmon.

You are Julio. You sell fruit, salgadinhos and doces from a cart in Rio de Janeiro. The game runs for two weeks, June 20 to July 3, 1994, as Brazil replaces the cruzeiro real with the real. Each morning you read yesterday's newspaper, load or price the cart, and sell. Each night you decide who in your family eats.

## Play

Open `index.html` in any browser. No install and no login.

## What is in this repository

| Path | What it holds |
|---|---|
| `index.html` | The whole game in one file. This is the file players open. |
| `src/game.js` | Screens, text, events and the works cited. |
| `src/engine.js` | The game's math: rates, prices, customers, stock. |
| `src/head.html` | Fonts and styles. |
| `src/photos.js` | The photographs, embedded for the single-file build. Generated from `img/`. |
| `src/sim.js` | The balance simulation. Run `node src/sim.js`. |
| `img/` | The cropped photographs. |
| `audio/` | The background music, “Love Samba” by Maxim Novak, used with the artist’s permission. |
| `build.sh` | Rebuilds `index.html` from `src/`. Run `sh build.sh`. |

## What comes from the record, and what the game invents

The daily URV rates, the conversion of CR$ 2,750 to R$ 1 on July 1, 1994, the minimum wage and the match results come from the sources in the game's works cited. The game invents Julio and his family, the newspaper *O Pregão*, and every price and customer count. The Notes screen at the end of a completed game says which is which.

## Sources

The game shows its works cited only to players who finish the two weeks. Here is the full list:

- Acemoglu, Daron, and James A. Robinson. *Why Nations Fail: The Origins of Power, Prosperity, and Poverty*. New York: Crown, 2012.
- Agência Brasil. “‘Todo mundo corria quando ouvia o remarcador’, recorda dona de casa.” July 2014.
- Banco Central do Brasil. “Monetary Updating Factors and Interest Reference Rates.” Chapter 7 of the Bank’s English-language public finance manual. States the conversion CR$ 2,750.00 = R$ 1.00.
- Banco Central do Brasil. “Plano Real.” Controle da Inflação. https://www.bcb.gov.br/controleinflacao/planoreal. Accessed November 9, 2026. States the URV rate of CR$ 647.50 on March 1, 1994 and CR$ 2,750.00 on June 30, 1994; the conversion of one URV to R$ 1.00 on July 1; and twelve-month inflation of 4,922% in June 1994, 916% at the end of 1994 and 22% in 1995.
- Banco Central do Brasil. Daily values of the Unidade Real de Valor (URV), June 17–30, 1994. The Bank’s own page confirms the endpoints, and the front pages of the *Jornal do Commercio* confirm June 21, June 22, Monday, June 27 and June 30. The remaining daily values come through the table in “Unidade real de valor,” Wikipedia, which cites the Banco Central.
- Brasil. Constituição da República Federativa do Brasil de 1988. Art. 196.
- Brasil. Lei nº 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde. Câmara dos Deputados, Legislação Informatizada.
- Brasil. Ministério da Saúde. *Política Nacional de Medicamentos*. Approved by Portaria nº 3.916, de 30 de outubro de 1998. Brasília: Ministério da Saúde, 2001.
- Brasil. Medida Provisória nº 542, de 30 de junho de 1994. Câmara dos Deputados, Legislação Informatizada.
- Brasil. Portaria Interministerial nº 4, de 2 de março de 1994. Sets the monthly minimum wage at 64.79 URV.
- Cardoso, Eliana. “Inflation and Poverty.” NBER Working Paper No. 4006. Cambridge, MA: National Bureau of Economic Research, 1992.
- Governo do Estado do Rio de Janeiro. CEASA-RJ. *Relatório de Gestão 2018*. States that CEASA-RJ was created by Decreto-Lei Estadual nº 228 of May 20, 1970.
- DN Brasil. “Feijoada brasileira tem raízes portuguesas, aponta pesquisadora.” Quotes Roberta Malta Saldanha on the dish’s origin. Accessed November 9, 2026.
- Hershberg, Eric. Lecture, Comparative Governance: Asia and Latin America, American University, fall 2019.
- *Jornal do Commercio* (Rio de Janeiro). Front pages, June 21, 22 and 25 and July 1, 1994, year 167, nos. 214, 215, 218 and 223. “Valor da URV,” “Dólar comercial” and “Salário mínimo” indicators, and “Comércio não precisa expor preço em CR$” (June 21), and “Somente saque e troca nos bancos” (July 1). Hemeroteca Digital Brasileira, Fundação Biblioteca Nacional.
- Morrison, Toni. *Beloved*. New York: Knopf, 1987.
- O Povo. “30 anos do Real.” June 30, 2024. Reprints the paper’s coverage of June 30 and July 1, 1994.
- Price, Haley. *Death and Taxes: Debt and the Tokugawa Samurai*. JapanLab, University of Texas at Austin, 2022.
- Rec.Sport.Soccer Statistics Foundation (RSSSF). “World Cup 1994 Finals.” Match dates, scores and goalscorers.
- Rocha, Sonia. *Renda e Pobreza: Os Impactos do Plano Real*. Texto para Discussão nº 439. Rio de Janeiro: Ipea, December 1996.

## How I checked the record

- I confirmed the URV endpoints (CR$ 647.50 on March 1, CR$ 2,750.00 on June 30) and the inflation figures on the Banco Central's "Plano Real" page.
- I checked the daily URV against the front page of Rio's *Jornal do Commercio* for June 21, June 22, June 25 and July 1, 1994. Every value matched, and June 22 settled a CR$ 2,454.17 typo in some tables. The *Jornal do Brasil* printed the rate on page 10 in type I could not read from the scan, so I don't cite it.
- I took the other daily values from Wikipedia's copy of the Bank's table. The paper's front-page box would confirm any of them.
- The law (Medida Provisória 542) gave the old notes 30 days; the *Jornal do Commercio* of July 1 told readers they would spend until July 15. I kept both, the way a reader met them in 1994.

## Rights

This repository has no license yet, so all rights are reserved. Each photograph carries its own credit, and the Wikimedia Commons photographs keep their original licenses (CC0 1.0 and CC BY 2.0).
