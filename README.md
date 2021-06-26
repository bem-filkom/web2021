# Development instructions

1. Read this first: [Making a proper, semantic commit message](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
2. Checkout master and pull the latest master branch
3. Make your change to the latest code
4. Make a new branch for your feature/fix with `git checkout -b <yourbranchname>`. Example: `git checkout -b add-calendar`
5. `git add .` (dot is mandatory)
6. `git commit -m "your message here"` (read the first point above)
7. `git push -u origin <yourbranchname>`
8. Go to GitHub repo page, make a pull request from your branch to master from here.
9. If revision is requested, just make a new commit like above and push again to your feature branch. 
9. Once reviewed and merged by BPH, you can delete your feature branch. And start again from number one.

# Deployment instructions

When your code is merged to master, voila, your code will be built and alive on https://bemfilkom.ub.ac.id/
