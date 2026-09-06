# Film-Project


### 🎬 Film Projesi (Film Project)

Bu proje, **Vanilla JavaScript (ES5 Prototype yapısı)** kullanılarak geliştirilmiş dinamik bir **Film Kütüphanesi uygulamasıdır**. Kullanıcılar arayüz üzerinden film adı, yönetmen ve film afişi linki ekleyerek kendi listelerini oluşturabilirler. Eklenen veriler **Local Storage** üzerinde saklandığı için tarayıcı kapatılsa dahi veriler kaybolmaz. 

### 🇹🇷 Türkçe Açıklama

### 🚀 Özellikler

* **Dinamik Film Ekleme:** Form aracılığıyla anlık olarak listeye film eklenebilir.
* **Kalıcı Depolama (Local Storage):** Eklenen filmler tarayıcı hafızasında saklanır.
* **Anlık Bildirimler:** Başarılı ekleme işlemlerinde veya boş alan bırakıldığında 2 saniyelik dinamik uyarı mesajları gösterilir.
* **Giriş Temizleme:** Film eklendikten sonra form alanları otomatik olarak temizlenir.

### 🛠️ Kullanılan Teknolojiler

* **HTML5 & CSS3** (Arayüz yapısı)
* **Bootstrap** (Responsive tasarım ve bileşenler)
* **Vanilla JavaScript (ES5)** (Prototype tabanlı OOP mimarisi)

### 📁 Proje Yapısı ve Kod Mimarisi

Proje, Nesne Yönelimli Programlama (OOP) prensiplerine uygun olarak 4 ana modüle ayrılmıştır: 

1. **Film (Model):** Filmin başlık, yönetmen ve afiş URL özelliklerini tutan kurucu fonksiyon.
2. **UI (Görünüm Katmanı):** Filmlerin HTML tablosuna eklenmesi, form temizliği ve ekrandaki alert mesajlarının yönetimini sağlar.
3. **Storage (Veri Katmanı):** Verilerin tarayıcının yerel depolama alanına (Local Storage) JSON formatında yazılması ve okunması işlemlerini yürütür.
4. **App/Project (Kontrolör):** Olay izleyicilerini (Event Listeners) yöneterek UI ve Storage modüllerini koordine eder.

### 📦 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için herhangi bir paket yöneticisine (npm, pip vb.) ihtiyaç yoktur. 

1. Bu depoyu klonlayın: 

bash

git clone https://github.com/[KullanıcıAdı]/[DepoAdı].git

Kodu dikkatli kullanın.
2. Proje klasörüne gidin ve index.html dosyasını herhangi bir modern tarayıcıda (Chrome, Edge, Firefox) çift tıklayarak açın.

### 🇺🇸 English Description

### 🚀 Features

* **Dynamic Film Insertion:** Add movies instantly to the UI table via a form interface.
* **Persistent Storage (Local Storage):** Saved movies stay safe in the browser's memory even if the page refreshes.
* **Real-time Notifications:** Displays 2-second dynamic alerts for successful entry or validation errors.
* **Input Auto-Clear:** Automatically flushes form inputs immediately after a successful action.

### 🛠️ Tech Stack

* **HTML5 & CSS3** (Markup & Styling)
* **Bootstrap** (Responsive layouts & components)
* **Vanilla JavaScript (ES5)** (Prototype-based OOP structure)

### 📁 Project Structure & Code Architecture

The codebase isolates responsibilities into 4 separate object prototypes: 

1. **Film (Model):** Constructor function maintaining attributes for title, director, and cover URL.
2. **UI (View Layer):** Appends movie elements into the HTML table DOM, triggers system messages, and wipes entry inputs.
3. **Storage (Data Layer):** Communicates with the browser's Local Storage api to fetch or serialize array streams into JSON formats.
4. **App/Project (Controller):** Binds active event listeners (submit, DOMContentLoaded) to safely bridge UI and Storage.

### 📦 Installation & Setup

No heavy package installations required. 

1. Clone the repository: 

bash

git clone https://github.com/[UserName]/[RepoName].git

Kodu dikkatli kullanın.
2. Simply launch the application by opening the index.html file in any modern web browser.

### 📄 Lisans / License

This project is licensed under the **MIT** License.
