import { Locale } from "../../types";
 
const locale: Locale = {
  "mailbox": {
    "title": {
      "inbox": "Postvak IN",
      "sent": "Verzonden",
      "drafts": "Concepten",
      "trash": "Prullenbak",
      "junk": "Spam"
    },
    "empty": "Deze mailbox is leeg"
  },
  "message": {
    "labels": {
      "from": "Van:",
      "to": "Naar:",
      "date": "Verzonden:"
    }
  },
  "mailboxMessage": {
    "to": "Naar:"
  },
  "login": {
    "title": "Log in",
    "action": "Log in",
    "labels": {
      "username": "Gebruikersnaam",
      "password": "Wachtwoord"
    }
  },
  "accountButton": {
    "logout": "Afmelden",
    "myAccount": "Mijn rekening"
  },
  "compose": {
    "labels": {
      "to": "Naar:",
      "subject": "Onderwerpen:",
      "cc": "CC:",
      "bcc": "Bcc:"
    },
    "tabs": {
      "newMessageTitle": "Nieuw bericht"
    }
  },
  "editor": {
    "cmd": {
      "undo": "Ongedaan maken",
      "redo": "Opnieuw doen",
      "fontName": "Lettertype",
      "fontSize": "Lettertypegrootte",
      "bold": "Stoutmoedig",
      "italic": "Cursief",
      "underline": "Onderstrepen",
      "justifyLeft": "Links uitlijnen",
      "justifyCenter": "Lijn het midden uit",
      "justifyRight": "Rechts uitlijnen",
      "insertUnorderedList": "Lijst",
      "insertOrderedList": "Genummerde lijst",
      "removeFormat": "Formaat verwijderen"
    },
    "color": {
      "tooltip": "Kleur",
      "foreColor": "Tekst",
      "backColor": "Achtergrond"
    },
    "upload": {
      "tooltip": "Vastmaken",
      "add": "Toevoegen",
      "remove": "Verwijderen"
    },
    "send": "Sturen"
  },
  "selection": {
    "title": [
      "{n} berichten",
      "{n} bericht",
      "{n} berichten"
    ]
  },
  "actions": {
    "backToMailbox": "Terug naar mailbox",
    "reload": "Vernieuwen",
    "select": "Selecteer",
    "markAsUnread": "Markeer als niet gelezen",
    "markAsRead": "Markeer als gelezen",
    "moveTo": "Ga naar",
    "delete": "Verwijderen",
    "deletePermanently": "Permanent verwijderen",
    "discardDrafts": "Gooi concepten weg",
    "markAsSpam": "Markeer als spam",
    "unMarkAsSpam": "Dit is geen spam",
    "forward": "Vooruit",
    "reply": "Antwoord",
    "attachments": "Bijlagen"
  },
  "weekDays": {
    "0": "zondag",
    "1": "maandag",
    "2": "dinsdag",
    "3": "woensdag",
    "4": "donderdag",
    "5": "vrijdag",
    "6": "zaterdag"
  },
  "months": {
    "0": "januari",
    "1": "februari",
    "2": "maart",
    "3": "april",
    "4": "mei",
    "5": "Jun",
    "6": "juli",
    "7": "augustus",
    "8": "september",
    "9": "oktober",
    "10": "November",
    "11": "december"
  },
  "notifier": {
    "messageSent": "Bericht verzonden"
  },
  "drawerActions": {
    "createMailbox": {
      "label": "Nieuwe map",
      "success": "Map gemaakt"
    }
  },
  "dialogs": {
    "createMailbox": {
      "title": "Maak een nieuwe map",
      "label": "Naam van de map",
      "accept": "Creëer",
      "cancel": "annuleren"
    }
  },
  "myAccount": {
    "title": "Mijn rekening",
    "limits": {
      "gbUsed": "{gb} GB",
      "gbTotal": "van {gb} GB",
      "storage": {
        "title": "Opslag"
      },
      "imapDownload": {
        "title": "IMAP downloaden"
      },
      "imapUpload": {
        "title": "IMAP-upload"
      },
      "pop3Download": {
        "title": "POP3 downloaden"
      }
    }
  }
};

export default locale;