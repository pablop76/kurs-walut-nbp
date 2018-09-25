var initCurrency = function (header, container) {
    $.get("http://api.nbp.pl/api/exchangerates/tables/C?format=json", function (data) {
        var kursy = '<table><thead><tr><th>WALUTA</th>' +
            '<th>SYMBOL</th>' +
            '<th>SPRZEDAŻ</th>' +
            '<th>SKUP</th></tr></thead><tbody>';
        console.log(data);
        for (var i = 0; i < data[0].rates.length; i++) {
            kursy += "<tr><th id='td-" + i + "'" + ">" + data[0].rates[i].currency + "</th>" + "<th>" + data[0].rates[i].code + "</th>" + "<th>" + data[0].rates[i].bid + "</th>" + "<th>" + data[0].rates[i].ask + "</th>";
        }
        kursy += "</tbody></table>"
        $(header).append("Kurs NBP " + data[0].effectiveDate);
        $(container).append(kursy);
    });
}
//initCurrency("h1", ".result");
//
//1. ustawiam zmienna funkcyjną, żeby uczynić zmienne prywatne, żeby nie było konfliktu z innymi pluginami
//2. pobieram dane a api za pomocą json (https://api.jquery.com/jquery.get/)
//ze strony nbp według ich instrukcji (http://api.nbp.pl/)
//W zmiennej data otrzymuję json z aktualnymi kursami. zobacz co pokazuje - console.log(data);
//
//INSTRUKCJA UŻYTKOWNIKA
//
//    Odpowiedź serwisu zwracana jest albo w formacie JSON albo XML, zależnie od wymagań klienta. Format odpowiedzi można wskazać na dwa sposoby – za pomocą parametru zapytania ?format albo przy pomocy nagłówka HTTP Accept:
//
//    format JSON: nagłówek Accept: application/json lub parameter ?format=json
//    format XML: nagłówek Accept: application/xml lub parameter ?format=xml
//
//Użyłem formatu json dodając w adresie format=json
//3. Tworzę zmienną kursy i zapisuję w niej html naszej przyszłej tabelki  jako string.
//7. Petla pobierająca interesujące nas wartości (currency - nazwa waluty, code - kod waluty, bid - kurs sprzedaży, ask - kurs kupna) i dodająca je do naszej tabelki razem ze znacznikami tr , th oraz dodatkowo nadająca id dla th z nazwą waluty po to żeby w css wstawić w te miejsca flagi.
//10. dodanie zamknięcia tbody i table. Gdybum dodał to w pętli dodal bym je za każdym wierszem tabelki a to nie o to chodzi :)
//11. pobranie znacznika html na naszej stronie podany w wywołaniu funkcji (initCurrency("h1", ".result")) i wstawienie do niego aktualnej daty pobranej z api.
//12. pobranie znacznika html na naszej stronie podany w wywołaniu funkcji (initCurrency("h1", ".result")) i wstawienie do niego tabelkę która jest w zmiennej kursy.
//15. Można zostawić wywołanie w tym miejscu (wywołanie jest w html) ale trzeba by było zwrócic uwagę na podpięcie pliku, żeby był przed zaknięciem body. (Musi czekać na wczytanie DOM bo innaczej nie pobierze znaczników html bo ich jeszcze nie będzie jeżeli uruchomi się np.  w body), albo zaknąć go w 
//$( document ).ready(function() {
//  // Handler for .ready() called.
//}); 
    