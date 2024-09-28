
# Player Leveling System

Sistem levelovanja igrača na serveru nagrađuje aktivno igranje tako što povećava nivo igrača na osnovu vremena koje provede u igri. 
Sistem prati minute i sate koje igrač provede u igri, a nivo se povećava kada se dostignu određeni ciljevi.

## Funkcionalnost

1. **Praćenje Minuta**:
    - Svakom igraču se vreme igranja prati u minutama.
    - Za svaki minut proveden u igri ukoliko igrač nije AFK.

2. **Plaćanje Rente za Vozila**:
    - Za svako vozilo koje igrač poseduje, sistem proverava da li je vozilo iznajmljeno.
    - Ako je vozilo iznajmljeno, sistem skida iznos rente sa igračevog bankovnog računa.

3. **Proces Levelovanja**:
    - Kada igrač provede 60 minuta u igri, njegovi ukupni sati (`TOTAL_HOURS`) se uvećavaju.
    - Sistem proverava da li je igrač dostigao potreban broj sati za sledeći nivo. Kvota za prelazak na sledeći nivo se računa množenjem sledećeg nivoa (`NEXT_LEVEL`) sa konstantom `LEVEL_UP_QUOTA`.
    - Ako igrač ispuni ili premaši potrebnu kvotu, njegov nivo se povećava za 1, a rezultat u igri se ažurira kako bi reflektovao novi nivo.

4. **Payday (Plata)**:
    - Nakon što se ažuriraju sati i nivo, igrač dobija svoju platu (payday). Plata se isplaćuje nakon svakih 60 minuta igranja.

