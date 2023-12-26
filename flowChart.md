# Mov1e's Framework

```flow
st=>start: Start
e=>end: End:
Connect=>operation: Connect to the Site:>https://mov1e.myddns.me/[blank]
Redirect=>parallel: Redirect(./index.html-> ./template/index.html)
homePage=>subroutine: Home Page(index.html)
introPage=>subroutine: Intro Page(intro.html)
aboutPage=>subroutine: About Page(about.html)


st->Connect->Redirect->end
Redirect(path1, bottom)->homePage
Redirect(path2, bottom)->introPage
Redirect(path3, bottom)->aboutPage
```
