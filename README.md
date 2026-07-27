# Jelena Mićić — Jekyll sajt

Spreman za GitHub Pages.

## Lokalno pokretanje

1. Instaliraj Ruby i Bundler.
2. U folderu projekta pokreni:

```bash
bundle install
bundle exec jekyll serve
```

3. Otvori `http://localhost:4000`.

## GitHub Pages

1. Napravi novi GitHub repository.
2. Kopiraj sadržaj ovog foldera u root repozitorijuma.
3. Push na granu `main`.
4. GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
5. Izaberi `main` i folder `/ (root)`.

Ako je repository projektni sajt, npr. `username.github.io/jelena-micic`, u `_config.yml` postavi:

```yml
url: "https://username.github.io"
baseurl: "/jelena-micic"
```

Ako je repository `username.github.io`, ostavi `baseurl: ""`.

## Fotografije

Trenutna verzija koristi javne URL-ove fotografija iz medijskih izvora. Folder `assets/images/` je pripremljen ako želiš da kasnije koristiš lokalne fotografije za koje imaš pravo objavljivanja.
