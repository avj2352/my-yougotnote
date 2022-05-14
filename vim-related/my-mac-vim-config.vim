syntax on
set ruler
set number
set autoindent
set smarttab
set background=dark

" Start pluginstall lib
call plug#begin()
Plug 'https://github.com/vim-airline/vim-airline' " Status Bar colorized
Plug 'https://github.com/preservim/nerdtree' " Nerdtree / Project explorer
Plug 'https://github.com/ryanoasis/vim-devicons' "Developer icons
Plug 'christoomey/vim-system-copy' "System copy plugin
Plug 'luochen1990/rainbow' "Rainbow brackets plugin
Plug 'joshdick/onedark.vim' "Onedark vim colorscheme
Plug 'Mofiqul/dracula.nvim' "Dracular vim colorscheme
Plug 'marko-cerovac/material.nvim' "Material vim colorcheme
Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'} "Install TreeSitter
Plug 'https://github.com/airblade/vim-gitgutter.git'
Plug 'https://github.com/leafgarland/typescript-vim.git'
Plug 'pangloss/vim-javascript'
Plug 'https://github.com/hail2u/vim-css3-syntax.git'
Plug 'mxw/vim-jsx'
Plug 'flowtype/vim-flow'
Plug 'vim-scripts/loremipsum'
Plug 'honza/vim-snippets'
Plug 'dart-lang/dart-vim-plugin'
Plug 'neoclide/coc.nvim', {'branch': 'release'} " Also do: :CocInstall coc-flutter
Plug 'altercation/vim-colors-solarized'
Plug 'google/vim-searchindex'
call plug#end()

"Set material colorscheme
" colorscheme material
" colorscheme onedark
"Preconfig Rainbow brackets
let g:rainbow_active = 1 "set to 0 if you want to enable it later via :RainbowToggle

" Keyboard bindings
nnoremap <C-f> :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>


let g:NERDTreeDirArrowExpandable="+"
let g:NERDTreeDirArrowCollapsible="~"

" Plugin rainbow change highlight color
" hi rainbowcol1 guifg=#feec37
