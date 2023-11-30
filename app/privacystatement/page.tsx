import React from "react";
import {lenzoData} from "@/app/data/data";
import Link from "next/link";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Lenzo GmbH - Datenschutzerklärung',
    description: 'Datenschutzerklärung',
}

export default function Privacystatement() {
    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16'>
            <div className='flex flex-col max-w-[1024px] w-full'>
                <div
                    className='lg:text-5xl font-bold text-2xl my-6 justify-center items-center flex'>Datenschutzerklärung
                </div>
                <div className='flex flex-col gap-3 py-5 '>
                    Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DSGVO) ist die
                    <div>
                        Firma: Lenzo GmbH
                    </div>
                    <div>
                        Adresse: Gewerbepark 6, 8111 Gratwein Straßengel, Österreich
                    </div>
                    <div>
                        Firmenbuch-Nummer: FN 378428
                    </div>
                    <div>
                        Firmenbuchgericht: Landesgericht für ZRS Graz
                    </div>
                    <div>
                        Telefon: <Link className='hover:text-primary' href={lenzoData.telHref}>{lenzoData.tel}</Link>
                    </div>
                    <div>
                        E-Mail: <Link className='hover:text-primary' href={lenzoData.emailHref}>{lenzoData.email}</Link>
                    </div>
                    <div>
                        UID-Nummer: ATU 67135717
                    </div>
                    <div>
                        Aufsichtsbehörde/Gewerbebehörde: Magistrat Graz
                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>Verarbeitung personenbezogener Daten von Interessenten, Kunden,
                        Lieferanten und Geschäftspartnern
                    </div>
                    <div>
                        Wir speichern von Ihnen jene Daten, die Sie uns als Interessent, Kunde, Lieferant oder
                        Geschäftspartner durch eigene Angaben, etwa im Rahmen einer Anfrage oder zum Abschluss eines
                        Vertrages zur Verfügung stellen. Dazu gehören beispielsweise Vor- und Nachname, Anschrift und
                        E-Mail-Adresse, Telefonnummer, Bankverbindung, Vertragsdaten.<br/><br/>

                        Personenbezogene Daten werden von uns an Dritte nur weitergegeben, wenn dies zum Zwecke der
                        Vertragsabwicklung oder zu Abrechnungszwecken erforderlich ist oder Sie als Nutzer der Website
                        zuvor eingewilligt haben. Mit allen Dritten haben wir – wenn erforderlich - rechtskonforme
                        Auftragsverarbeiterverträge abgeschlossen.<br/><br/>

                        Die Daten werden von uns gelöscht, sobald eine Speicherung nicht mehr erforderlich ist, bzw.
                        gesetzliche, wie z. B. umsatzsteuerrechtliche Aufbewahrungspflichten abgelaufen sind. Sollte die
                        Grundlage der Verarbeitung eine Einwilligung darstellen, löschen wir die Daten bei Widerruf der
                        Einwilligung – außer es sprechen gesetzliche Vorschriften dagegen.<br/><br/>

                        Rechtsgrundlage der Datenverarbeitung sind:<br/><br/>

                        <ul className='list-disc list-inside'>
                            <li>
                                die Vertragsanbahnung und -erfüllung gem. Art. 6 Abs. 1 lit b DSGVO, um Ihre
                                Reservierungen bzw- Ihren Einkauf/Verkauf zur vollsten Zufriedenheit abwickeln zu
                                können.
                            </li>
                            <li>
                                gesetzliche Verpflichtungen gem. Art 6 Abs. 1 lit. c DSGVO, die wir erfüllen müssen wie
                                beispielsweise gesetzlich vorgeschriebene Aufbewahrungs- und Dokumentationspflichten.

                            </li>
                            <li>
                                berechtigte Interessen unseres Unternehmens iSv Art 6 Abs 1 lit f DSGVO und berechtigte
                                Interessen iSv Art 6 Abs 1 lit f DSGVO, die von einem Dritten verfolgt werden,

                            </li>
                            <li>

                                Art 6 Abs. 1 lit a DSGVO bei Einholung von Einwilligungen im Rahmen der Registrierung
                                für z.B. den Erhalt von Newslettern und Werbezusendungen
                            </li>
                        </ul>

                    </div>


                </div>

                <div className='text-2xl'>Erhebung personenbezogener Daten bei Besuch unserer Website</div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>KONTAKTAUFNAHME</div>
                    <div>
                        Bei Ihrer Kontaktaufnahme mit uns über das Kontaktformular werden die von Ihnen mitgeteilten
                        Daten (Ihre E-Mail-Adresse und Ihr Vor- und Nachname) von uns gespeichert, um Ihre Fragen zu
                        beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung
                        nicht mehr erforderlich ist, oder schränken die Verarbeitung ein, falls gesetzliche
                        Aufbewahrungspflichten bestehen.<br/><br/>

                        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DS-GVO<br/>

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>BEWERBUNGSFORMULAR</div>
                    <div>
                        Für Personen, die an der Mitarbeit in unserem Unternehmen interessiert sind, besteht die
                        Möglichkeit, sich direkt auf der Website über ein dort bereitgestelltes Formular zu bewerben.
                        Hierbei werden die von Ihnen mitgeteilten Daten (Ihr Vor- und Nachname, Ihre E-Mail-Adresse
                        sowie - sofern sie diese angeben – auch Ihre Telefonnummer und die Daten in Ihrem hochgeladenen
                        Lebenslauf) von uns gespeichert, um eine Bewerberauswahl zu treffen. Die in diesem Zusammenhang
                        an uns übermittelten Daten löschen wir 6 Monate nachdem ein Auswahlverfahren abgeschlossen ist
                        bzw. bei Initiativbewerbungen sofort nach Erhalt, wenn es zu keinem Auswahlverfahren kommt. Wenn
                        Sie uns die Zustimmung zur Evidenzhaltung übermitteln, löschen wir Ihre Daten 2 Jahre nach Ihrer
                        Bewerbung.<br/><br/>

                        Rechtsgrundlage: Art. 6 Abs. 1 lit. a (Evidenzen), b (Vertragserfüllung) DS-GVO<br/>

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>INFORMATORISCHE NUTZUNG DER WEBSITE</div>
                    <div>
                        Bei der bloß informatorischen Nutzung der Website, erheben wir nur die personenbezogenen Daten,
                        die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten,
                        erheben wir höchstens jene Daten, die für uns technisch erforderlich sind, um Ihnen unsere
                        Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten:<br/><br/>

                        <ul className='list-disc list-inside'>
                            <li>
                                IP-Adresse
                            </li>
                            <li>
                                Datum und Uhrzeit der Anfrage
                            </li>
                            <li>
                                Zeitzonendifferenz zur Greenwich Mean Time (GMT)
                            </li>
                            <li>
                                Inhalt der Anforderung (konkrete Seite)
                            </li>
                            <li>
                                Zugriffsstatus/HTTP-Statuscode
                            </li>
                            <li>
                                Sprache und Version der Browsersoftware
                            </li>
                            <li>
                                Browser
                            </li>
                            <li>
                                Website, von der die Anforderung kommt
                            </li>


                        </ul>

                    </div>
                </div>
                <div className='text-2xl'>Cookies</div>


                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'></div>
                    <div>
                        Zusätzlich zu den zuvor genannten Daten werden bei Ihrer Nutzung unserer Website Cookies auf
                        Ihrem Rechner gespeichert. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer
                        Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der
                        Stelle, die das Cookie setzt (hier durch uns), bestimmte Informationen zufließen. Cookies können
                        keine Programme ausführen oder Viren auf Ihren Computer übertragen.<br/><br/>

                        Durch das Cookie können Sie beim Besuch der Webseite wiedererkannt werden, ohne dass Daten, die
                        Sie bereits zuvor eingegeben haben, nochmals eingegeben werden müssen.<br/><br/>

                        Die in den Cookies enthaltenen Informationen werden z.B. verwendet, um festzustellen, ob Sie
                        eingeloggt sind, oder welche Daten Sie bereits eingegeben haben, oder um Sie als Nutzer
                        wiederzuerkennen, wenn eine Verbindung zwischen unserem Web-Server und Ihrem Browser hergestellt
                        wird. Bei den meisten Web-Browsern werden Cookies automatisch akzeptiert.<br/><br/>

                        Mit der Nutzung unserer Webseiten sind Sie, soweit Cookies nach Ihren Browser-Einstellungen
                        akzeptiert werden, mit dem Einsatz dieser Cookies einverstanden.<br/>

                    </div>
                </div>


                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>TRANSIENTE COOKIES</div>
                    <div>
                        Transiente Cookies werden automatisiert gelöscht, wenn Sie den Browser schließen. Dazu zählen
                        insbesondere die Session-Cookies. Diese speichern eine sogenannte Session-ID, mit welcher sich
                        verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Dadurch kann Ihr
                        Rechner wiedererkannt werden, wenn Sie auf unsere Website zurückkehren. Die Session-Cookies
                        werden gelöscht, wenn Sie sich ausloggen oder den Browser schließen.

                    </div>
                </div>


                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>PERSISTENTE COOKIES</div>
                    <div>
                        Persistente Cookies werden automatisiert nach einer vorgegebenen Dauer gelöscht, die sich je
                        nach Cookie unterscheiden kann. Sie können die Cookies in den Sicherheitseinstellungen Ihres
                        Browsers jederzeit löschen.

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>DRITTANBIETER-COOKIES</div>
                    <div>
                        Diese stammen von anderen Anbietern als dem Betreiber der Webseite. Sie können beispielsweise
                        zum Sammeln von Informationen für Werbung, benutzerdefinierte Inhalte und Web-Statistiken
                        verwendet werden.
                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>BROWSER</div>
                    <div>
                        Die meisten Browser sind standardmäßig so eingestellt, dass sie alle Cookies akzeptieren. Sie
                        können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                        Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                        ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                        Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt
                        sein.<br/><br/>

                        Sie können auf Ihrem PC gespeicherte Cookies jederzeit selbst durch Löschen der temporären
                        Internetdateien entfernen.<br/><br/>

                        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO<br/>
                    </div>
                </div>

                <div className='text-2xl'>Server Logfiles</div>
                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'></div>
                    <div>
                        Zur Optimierung dieser Website in Bezug auf die System-Performance, Benutzerfreundlichkeit und
                        Bereitstellung von nützlichen Informationen über unsere Dienstleistungen erhebt und speichert
                        der Provider der Website automatisch Informationen in sogenannten Server-Log Files, die Ihr
                        Browser automatisch an uns übermittelt. Davon umfasst sind die Internet-Protokoll Adresse
                        (IP-Adresse) des anfragenden Computers (einschließlich mobiler Geräte), Browser und
                        Spracheinstellung, Betriebssystem, Referrer URL, Ihr Internet Service Provider und
                        Datum/Uhrzeit.<br/><br/>

                        Eine Zusammenführung dieser Daten mit personenbezogenen Datenquellen wird nicht vorgenommen. Wir
                        behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine
                        rechtswidrige Nutzung bekannt werden, und die Daten– sollte es einen Hackangriff gegeben haben –
                        an die Strafverfolgungsbehörden weiterzugeben. Eine darüberhinausgehende Weitergabe an Dritte
                        erfolgt nicht.<br/><br/>

                        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO<br/>
                    </div>
                </div>

                <div className='text-2xl'>Datenverwendung bei Dienstleistungen von Google</div>


                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'></div>
                    <div>
                        Google Ireland Limited („Google“), eine nach irischem Recht eingetragenen und betriebenen
                        Gesellschaft (Registernummer: 368047) mit Sitz in Gordon House, Barrow Street, Dublin 4, Irland
                        hat sich zur Einhaltung des vom US-Handelsministeriums veröffentlichten Privacy-Shield-Abkommens
                        zwischen der EU und den USA über die Erhebung, Nutzung und Speicherung von personenbezogenen
                        Daten aus den Mitgliedsstaaten der EU verpflichtet. Google, einschließlich seiner
                        hundertprozentigen Tochtergesellschaften in den USA, hat durch Zertifizierung erklärt, dass es
                        die einschlägigen Privacy-Shield-Prinzipien einhält. Die Privacy-Shield Zertifizierung von
                        Google können Sie hier einsehen. Dies gilt für alle nachstehend angeführten Dienstleistungen von
                        Google.
                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>GOOGLE TAG MANAGER</div>
                    <div>
                        Zur Erkennung Ihres User-Verhaltens nutzen wir sogenannte Google Tag Manager. Der Google Tag
                        Manager ist eine Lösung, mit der Vermarkter Website-Tags über eine Oberfläche verwaltet werden
                        können. Das Tool selbst (das die Tags implementiert) ist eine cookielose Domain und erfasst
                        keine personenbezogenen Daten. Das Tool sorgt für die Auslösung anderer Tags, die ihrerseits
                        unter Umständen Daten erfassen. Google Tag Manager greift nicht auf diese Daten zu. Wenn auf
                        Domain- oder Cookie-Ebene eine Deaktivierung vorgenommen wurde, bleibt diese für alle
                        Tracking-Tags bestehen, die mit Google Tag Manager implementiert werden.<br/><br/>

                        Genauere Informationen erhalten Sie hier: https://www.google.com/intl/de/tagmanager/faq.html.
                    </div>
                </div>
                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>GOOGLE FONTS</div>
                    <div>
                        Wir verwenden Google Fonts. Die Verwendung von Google Fonts erfolgt ohne Authentisierung und es
                        werden keine Cookies and die Google Fonts API gesendet. Sollten Sie ein Konto bei Google haben,
                        werden keine Ihrer Google-Kontodaten an Google während der Nutzung von Google Fonts übermittelt.
                        Google erfasst lediglich die Nutzung von CSS und der verwendeten Fonts und speichert diese Daten
                        sicher. Mehr zu diesen und weiteren Fragen finden Sie auf
                        https://developers.google.com/fonts/faq.<br/><br/>

                        Welche Daten von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auf
                        https://www.google.com/intl/de/policies/privacy/ nachlesen.<br/>
                    </div>
                </div>
                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>GOOGLE APIS /AJAX UND JQUERY</div>
                    <div>
                        Für die Optimierung von Ladegeschwindigkeit, Usability und Indizierung unserer Website verwenden
                        wir JavaScript-Technologien sowie entsprechende Programmbibliotheken und CDNs (Content Delivery
                        Networks) von externen Anbietern, im konkreten Fall der JavaScript-Bibliothek jQuery der jQuery
                        Foundation, die Programmschnittstelle Google APIs und die Google AJAX Search API von Google.
                        Durch Aufruf unserer Website erhalten diese externen Anbieter gegebenenfalls personenbezogene
                        Informationen über Ihren Besuch auf unserer Website, insbesondere durch die Übertragung Ihrer
                        IP-Adresse. Eine Verarbeitung dieser Daten außerhalb der EU ist möglich. Sie können dies
                        verhindern, indem Sie einen JavaScript-Blocker installieren oder Java-Script in Ihrem Browser
                        deaktivieren. Durch das Deaktivieren bzw. Blockieren von JavaScript kann es zu
                        Funktionseinschränkungen auf Internetseiten mit Java-Script-Technologien kommen. Weitere
                        Informationen über die Datenverarbeitung durch Google entnehmen Sie bitte den
                        Datenschutzhinweisen von Google, derzeit abrufbar unter:<br/><br/>
                        https://www.google.de/intl/de/policies/privacy/ sowie im Falle von jQuery auf den Seiten der JS
                        Foundation unter: js.foundation/about/governance/privacy-policy.<br/><br/>

                        Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO
                    </div>
                </div>


                <div className='text-2xl'>Ihre Rechte</div>
                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'></div>
                    <div>
                        Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen
                        Daten:
                        <ul className='list-disc list-inside'>
                            <li>
                                Recht auf Auskunft, Berichtigung und Löschung
                            </li>
                            <li>
                                Recht auf Einschränkung der Verarbeitung
                            </li>
                            <li>
                                Recht auf Widerspruch gegen die Verarbeitung
                            </li>
                            <li>
                                Recht auf Datenübertragbarkeit
                            </li>

                        </ul>


                        Richten Sie Ihre Anfragen und Anliegen bitte per E-Mail an office@lenzo.at oder kontaktieren Sie
                        uns bitte unter den angegebenen Kontaktdaten.<br/><br/>

                        Sollten Ihre von uns verarbeiteten Daten nicht richtig sein, unterrichten Sie uns bitte darüber.
                        Wir werden diese unverzüglich richtigstellen und Sie darüber informieren. Im Falle, dass Sie
                        eine Verarbeitung Ihrer Daten durch uns nicht länger wünschen, ersuchen wir Sie, uns dies
                        formlos mitzuteilen. Wir werden Ihre Daten selbstverständlich umgehend löschen und Sie davon
                        informieren. Sollten zwingende rechtliche Gründe einer Löschung entgegenstehen, werden Sie
                        dahingehend umgehend von uns benachrichtigt.<br/><br/>

                        Sollten Sie der Auffassung sein, dass wir bei der Verarbeitung Ihrer Daten gegen
                        österreichisches oder europäisches Datenschutzrecht verstoßen und dadurch Ihre Rechte verletzt
                        haben, ersuchen wir Sie mit uns in Kontakt zu treten, um allfällige Fragen aufklären zu
                        können.<br/><br/>

                        Sie haben zudem das Recht, sich bei der Aufsichtsbehörde, das ist die österreichische
                        Datenschutzbehörde, zu beschweren:<br/><br/>


                        Österreichische Datenschutzbehörde<br/><br/>

                        Barichgasse 40-42<br/><br/>

                        1030 Wien<br/><br/>

                        Telefon: +43 1 52 152-0<br/><br/>

                        E-Mail: dsb@dsb.gv.at<br/>

                    </div>


                    <div className='py-5 gap-3 flex flex-col'>
                        <div className='text-xl font-bold'>Änderungen dieser Datenschutzerklärung</div>
                        <div>
                            Wir behalten uns vor, von Zeit zu Zeit Anpassungen an unserer Datenschutzerklärung
                            vorzunehmen. Wir werden Ihre Rechte nach dieser Datenschutzerklärung nicht ohne Ihre
                            ausdrückliche Einwilligung einschränken. Alle Änderungen der Datenschutzerklärung werden von
                            uns auf dieser Seite veröffentlicht werden. Bitte beachten Sie diesbezüglich die jeweils
                            aktuelle Version unserer Datenschutzerklärung.
                        </div>
                    </div>
                    <div className='py-5 gap-3 flex flex-col'>
                        <div className='text-xl font-bold'>Haftungsausschluss</div>
                        <div>
                            Die Lenzo GmbH übernimmt keine Verantwortung für Inhalte auf fremden Websites, auf die
                            mittels Links verwiesen wird. Für den Inhalt der verlinkten Seiten sind ausschließlich deren
                            Betreiber verantwortlich.
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
