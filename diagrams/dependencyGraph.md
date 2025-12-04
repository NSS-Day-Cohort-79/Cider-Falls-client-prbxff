``` mermaid 

graph TD;

Main --> Guest
Main --> ParkArea
Main --> Services

ParkArea --> Database
Guest --> Database
Services --> Database

```