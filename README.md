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
| `build.sh` | Rebuilds `index.html` from `src/`. Run `sh build.sh`. |

## What comes from the record, and what the game invents

The daily URV rates, the conversion of CR$ 2,750 to R$ 1 on July 1, 1994, the minimum wage and the match results come from the sources in the game's works cited. The game invents Julio and his family, the newspaper *O Pregão*, and every price and customer count. The Notes screen at the end of the game says which is which.

## Open items

- The two Wilfredor photographs are CC0 1.0 (confirmed from their Commons metadata). “Favela do Vidigal” still needs its author and license in the credits.
- The daily URV values come through Wikipedia's copy of the Banco Central table. The Bank's own daily series still needs a direct citation.
- The DIEESE food basket figure comes through news reports, not DIEESE's own table.

## Rights

This repository has no license yet, so all rights are reserved. Each photograph carries its own credit, and the Wikimedia Commons photographs keep their original licenses.
