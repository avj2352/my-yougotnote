:set number
:set ruler
:set autoindent
:syntax on
:set smarttab
:set clipboard+=unnamedplus

call plug#begin('~/AppData/Local/nvim/plugged')

" below are some vim plugins for demonstration purpose.
" add the plugin you want to use here.
Plug 'joshdick/onedark.vim'
Plug 'iCyMind/NeoSolarized'
Plug 'dracula/vim', { 'as': 'dracula' }

Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'https://github.com/vim-airline/vim-airline' " Status Bar colorized
Plug 'https://github.com/preservim/nerdtree' " Nerdtree / Project explorer
Plug 'https://github.com/ryanoasis/vim-devicons' "Developer icons
Plug 'pangloss/vim-javascript'
Plug 'https://github.com/hail2u/vim-css3-syntax.git'
Plug 'mxw/vim-jsx'
Plug 'honza/vim-snippets'
Plug 'dart-lang/dart-vim-plugin'
Plug 'google/vim-searchindex'

call plug#end()

" Keyboard bindings
nnoremap <C-f> :NERDTreeFocus<CR>
nnoremap <C-n> :NERDTree<CR>
nnoremap <C-t> :NERDTreeToggle<CR>


let g:NERDTreeDirArrowExpandable="+"
let g:NERDTreeDirArrowCollapsible="~"

" default theme
" source ~/.config/nvim/themes/dracula.vim
source ~/.config/nvim/themes/onedark.vim
