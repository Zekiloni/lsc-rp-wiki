# Changelog

Sve značajne promene ovog projekta biće dokumentovane na ovoj stranici.

## LSCRP [1.3.3] - 27.09.2024

### Fixed features
- fixed login screen bug (nepokazivanje login dialoga)
- fixed payday timer, minutes counting
- fixed `/gpsoff` za sve igrače
- fixed checkpoint disable on player enter checkpoint
- fixed `/buy` unutar biznisa
- fixexd reports validation (mysql query rows validation)
- fixed `/arrest` bug za law fakcije
- fixed `/engine` bug (samo vlasnik vozila će sada moći da koristi)
- fixed `/lock` bug (samo vlasnik vozila će sada moći da koristi)
- fixed `/payphone` special calls bug (911 itd.)
- fixed `/creategate` za admine
- fixed `/gate` za igrače i bug (nemate dostup do gate)


### Updated features
- `/pay` je omogućen za plaćanje taksistima (bez levela)
- refaktorisanje svih timera, kill timera i resetovanja vrednosti timera
- `/achat` boja prilagodjena, različita od `/f` chata
- moved `/atog alerts` to `/tog alerts`

## LSCRP [1.3.2] - 25.09.2024

### Updated features
- Omogućeno carsign za EMS type fakcije
- Omogućeno kreiranje lockera za GOV type fakcije
- Redizajniran reports answer, sada će prikazivati sve informacije
- Onemogućeno prekidanje animacije zbog animchat-a
- Produžen tekst za komandu `/ame`
- Updated query types za potencijalne performanse
- Radio chat colors updated

### Removed features
- Removed AFK system (zbog određenih nepravilnosti)
- Removed invalid models

### Added features
- Dodate custom payday vrednosti za faction / employed
- Dodata opcija "izbriši" item u inventory
- Dodata opcija HUD na `/tog`
- Komanda `/atog` za admine
- `/setstats bank, minutes ...` za admine
- Added packet loss info za admine

### Fixed features
- Fixed logout and arespawn saving issues
- Fixed `/engine` and `/lock` commands validation
- Fixed payday and balance issues
- Fixed `/radio` za law fakcije
- Fixed `/buy` random price display
- Fixed crash on player update (server crash)
- Fixed armour item (toggle)
- Fixed garage bug kada je više ljudi u vozilu
- Fixed weather bug na `/respawn`
- Fixed `/members` za fakcije
- Fixed `/destroyentrance` za admine
- Fixed carsign position
- Fixed pizzaboy house positions
- Fixed armour in clothing store bug

