#Notizen zur Installation

 Typescript
 -----------
--------------
 Bei der Arbeit mit verschiedenen Verzeichnissen (backend, frontend) werden zur Vereinfachung  
 mehrere tsconfig files benötigt. Jedes Directory benötigt eine, einschließlich root.  

Wird im Backend gearbeitet erfolgt das Kompilieren (Transpilieren) in dem Backend Folder  
e.g. --cd backend.... tsc -b --

Sollte gewünscht sein, dass nach jeder Änderung kompiliert wird ist der Befehl : tsc -b --watch zu nutzen