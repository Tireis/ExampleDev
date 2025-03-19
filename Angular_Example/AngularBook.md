# Angular - Das große Praxisbuch

Autoren: Ferdinand Malcher, Danny Koppenhagen, Johannes Hoppe

## 12 Routing - durch die Anwendung navigieren

Routing ermöglicht das Wechseln von Komponenten und Ansichten ohne dabei die Seite neu laden zu müssen. Zusätzlich kann, obwohl die Seite nicht neu geladen wird, der Pfad gekennzeichnet werden.

Um auf eine Komponente zu routen, muss man diese im Router benennen. Hierbei wird zunächst der Path und daraufhin die Komponente genannt:

{path: '**mypath**', component: MyComponent}

Der Path darf keinen Slash ("**/**") vordefiniert haben, da Komponenten auch bei anderen Komponenten angehängt werden können

Wird im Browser der Path (hier: "mypath") aufgerufen, so wird die entsprechende Komponente geladen.
Bei nicht statischen Datensätzen kann man dem Pfad eine ID weitergeben, dazu müssen wir Path der Route einen Doppelpunkt einsetzen. Dadurch werden "Platzhalter" gesetzt. Dieser Platzhalter kann beliebig benannt werden.

{path: 'mypath/**:id**', component: MyComponent}

Die ID kann ein beliebiger String sein. Eine Route kann mehrere Parameter besitzen, welche durch Slashes ("/") getrennt werden.

Jedes Feature kann Routingkonfigurationen besitzen, welche auf Komponenten des Features zeigen. So können Komponenten und Routen zusammen dargestellt werden. Dazu kann man beim Generieren eines Features die Routing-Option hinzufügen:

Consolenbefehl:
{$ ng g module bar --routing}

Unterscheidung forRoot() und forChild()
