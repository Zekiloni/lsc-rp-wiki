# SA-MP Server Changelog

Sve značajne promene SA-MP servera će biti zabeležene na ovoj stranici.

## v1.3.8 - 28.09.2024

### Added
- Dodane tablice na (leo/ems/gov) vozila (LCSD-356)

## v1.3.7 - 28.09.2024

### Fixed
 - Popravljen **payday**, inkrementovanje minuta
 - Popravljen spawn u property (House)
 - Popravljen driving test `/engine` problem
 - Popravljen vehicle trunk (stavljanje itema u gepeke)
 - Popravljena `/unban` komanda za admine
 - Popravljene komande `/gate` & '/creategate'
 - Popravljena validacija na `/goto` komandi
 - Popravljeno ucitavanje gate-ova posle restarta
 - Popravljeno iskljucivanje admin duznosti kada nekome skines admina
 - Provera da li je hunger/thirst veci od 100 (maks)
 - Popravljena provera da li igrac vec koristi animaciju, ne play-aj talk animaciju
 - Popravljana pozicija posle respawn-a

### Updated
 - Refaktorisan [Player Leveling](/docs/features/player_leveling) system
 - Smanjen range na komandama `/me` & `/shout`
 - Poboljšane ukupne performanse MySQL query-a (~42% brže)
 - Izbrisana property adresa sa property logova
 - Poboljšane `/vrespawn` perm i temp vozila
 - Poboljšane `/near` dodan prikaz najblizeg vozila

### Added
 - Dodana `/fpark` komanda za parkiranje fakcijskog vozila
 - Definisana `Camera` item (možete pronaći u prodavnicama)
 - Dodan `Spraycan` item u prodavnicama
 - Dodano povecanje health-a na koriscenje hrane (+7hp)
 - Dodano `/gotomark` admin komanda
 - Dodana `/gotogps` komanda
 - Dodan `/law` za proveru online clanova law/ems/gov fakcija
 - Dodan pickup info za `/locker` i `/uniform`

## v1.3.3 - 27.09.2024

### Fixed
- Popravljen login screen bug (nepokazivanje login dialoga)
- Popravljen `/gpsoff`
- Popravljen destroy checkpoint-a kada udjete u isti
- Popravljen `/buy` - problem sa biznis menijima/katalozima
- Popravljen reports validation (MySQL query rows validation)
- Popravljen `/arrest` bug za law fakcije
- Popravljen `/engine` bug
- Popravljen `/lock` bug
- Popravljen `/payphone` pozivanje specijalnih brojeva (911, mehanicari, taxi, etc.)
- Popravljen `/creategate` for admins
- Popravljen `/gate` 


### Updated
- `/pay` je omogućen za plaćanje taksistima (bez levela)
- refaktorisanje svih timera, kill timera i resetovanja vrednosti timera
- `/achat` boja prilagodjena, različita od `/f` chata
- Premesten `/atog alerts` to `/tog alerts`

### Added features
- Dodata vozila za FD i promenjena boja vozila

## v1.3.2 - 25.09.2024

### Updated
- Omogućeno carsign za EMS type fakcije
- Omogućeno kreiranje lockera za GOV type fakcije
- Redizajniran reports answer, sada će prikazivati sve informacije
- Onemogućeno prekidanje animacije zbog animchat-a
- Produžen tekst za komandu `/ame`
- Updated query types za potencijalne performanse
- Radio chat colors updated

### Removed
- Removed AFK system (zbog određenih nepravilnosti)
- Removed invalid models

### Added 
- Dodate custom payday vrednosti za faction / employed
- Dodata opcija "izbriši" item u inventory
- Dodata opcija HUD na `/tog`
- Komanda `/atog` za admine
- `/setstats bank, minutes ...` za admine
- Added packet loss info za admine

### Fixed
- Popravljen `logout` and `arespawn` cuvanje
- Popravljen `/engine` and `/lock` commands validation
- Popravljen payday i balans
- Popravljen `/r(adio)`
- Popravljen `/buy` random price display
- Popravljen crash on player update (server crash)
- Popravljen armour item (toggle)
- Popravljen garage bug kada je više ljudi u vozilu
- Popravljen weather bug na `/respawn`
- Popravljen `/members` za fakcije
- Popravljen `/destroyentrance` za admine
- Popravljena carsign pozicija
- Popravljen Pizzaboy, pozicije kuca koje su unutar building-a
- Popravljen armour u clothing storovima

