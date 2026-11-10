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

The daily URV rates, the conversion of CR$ 2,750 to R$ 1 on July 1, 1994, the minimum wage and the match results come from the sources in the game's works cited. The game invents Julio and his family, the newspaper *O Pregão*, and every price and customer count. The Notes screen at the end of the game says which is which.

## Open items

- Photograph licenses are confirmed: the two Wilfredor photographs are CC0 1.0, and “Favela do Vidigal” (roney, 2006) is CC BY 2.0.
- The Banco Central's “Plano Real” page now confirms the URV endpoints (CR$ 647.50 on March 1, CR$ 2,750.00 on June 30) and the inflation figures. The daily values in between still come through Wikipedia's copy of the Bank's table. The Bank's communiqués would replace it.

## Rights

This repository has no license yet, so all rights are reserved. Each photograph carries its own credit, and the Wikimedia Commons photographs keep their original licenses (CC0 1.0 and CC BY 2.0).
