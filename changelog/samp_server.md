# SA-MP Server Changelog

Sve značajne promene SA-MP servera će biti zabeležene na ovoj stranici.


## v1.4.7 - 02.10.2024

### Fixed
- Stanje igrača i oznake: Ispravljene 3D tekst oznake, nametag-ovi, carsignovi vozila, oznake scena i oznake stanja igrača.
- Komande za vozila: Ispravljena validacija ID-a vozila za `/v sell-to` i validacija povezanosti igrača za `/spec` i `/whisper`.
- Dinamičke oznake: Ispravljeni parametri za kreiranje dinamičkih oznaka.
- ORM za inventar: Ispravljeno čuvanje nevažećih ORM ID-ova za stavke u inventaru.
- SMS i telefonski sistem: Ispravljeno prikazivanje SMS-ova igrača, formatiranje telefonskih poziva i dodate telefonske porudžbine za dostavu hrane.
- Diskonektovanje karaktera: Ispravljeni padovi servera izazvani čuvanjem podataka o karakteru prilikom diskonektovanja igrača.
- Formatiranje isplate (payday): Ispravljeno netačno formatiranje isplata i računanje kvote za sledeći nivo.
- Ostale ispravke: Popravljeni formati za komande `/taxi`, `/duty` i `/call 911`, kao i nekoliko sitnih slovnih grešaka.
- Popravljen preload animacija

### Updated
- Poruke igrača: Poboljšano formatiranje poruka igrača, uključujući generičke poruke sa parametrima za boju i povećana količina poruka za `/admins`.
- Telefonski sistem: Refaktorisan telefonski sistem, uključujući metode kao što su `IsPhoneNumberSpecial`, ažurirani brojevi telefona za taksi, mehaničara i dostavu hrane. Dodati maksimalni bakšiš i limit za isplatu dostavljača hrane.
- Streamer plugin: Ažuriran i uklonjen zastareli streamer plugin fajlovi.

### Added
- Posao dostavljača hrane: Dodate funkcionalnosti slične Wolt aplikaciji za dostavu hrane, kao i nove opcije za telefonske pozive.
- Nove komande: Dodate komande `/seatbelt`, `/checkseatbelt`


## v1.4.5 - 29.09.2024

### Fixed
 - Popravljena `/frisk` komanda
 - Popravljen `/call 911`, nije izbacivalo poruku clanovima LEO organizacija
 - Popravljena `/payticket` komanda
 - Popravljena nekolicina MySQL upita koji su izazivali server crash (escaped ')
 - Popravljene auto-emote tekstovi za `/engine` i `/lock`
 - Ispravljen draw/stream distance na većine mapa, negde smanjen, negde povećan u zavisnosti od prioriteta mape


:::warning
Par mapa koje su imale prevelik stream/draw distance što je najverovatnije uticalo na nestanak nametagova i respawn vozila
očekujemo da je rešeno, ukoliko nije biće u sledećem bug-fixu.
:::


### Updated
 - Unapredjen savings sistem, više tipova savingsa u zavisnosti od balansa (> $100k = visoko-prihodni štedni račun, < standardni račun)
 - Obavestice vas o thirst-u, hunger-u i alkohol levelu nakon sto pojedete/popijete nesto
 - Prilagodjena boja vozila news fakcije

### Added
 - Dodana `/handshake` komanda
 - Dodana `/tog staff-chat` opcija
 - Dodati novi dealershipovi, vozila i definisane nove cene

## v1.4.1 - 28.09.2024

### Fixed
 - Popravljena `/respawn` komanda

### Updated
- Dodane tablice na (leo/ems/gov) vozila (LCSD-356)
- Izmena maksimalan broj nepokretne imovine, najviše 3 nepokretne imovine u bilo kojoj kombinaciji (npr. 2 kuće i 1 biznis, 3 kuće, 1 kuća, 1 biznis i 1 garaža, itd.), bez ograničenja na tip imovine
- Ukoliko vam je `hunger level` iznad **95**, svakog mintua ce te izgubiti **0.13hp**, `thirst level` skida **0.25hp** sve do **50hp** (nece vam skidati ispod)
- Komanda `/setstats` za admine improved, nove opcije
- Komanda `/editvehicle` za admine, dodane nove opcije

### Added
 - Komanda `/needs` da vidite vas hunger i thirst level
 - Biznisi otvorenog tipa (walk in biznisi, bez interijera)
 - Mapa **Stare Crkve**, okolina *North Rock-a*
 - Ubacena nova 3 interijera garaza

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

