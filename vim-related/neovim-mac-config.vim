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
Plug 'mg979/vim-visual-multi', {'branch': 'master'} "Install multiple cursor plugin for neovim
Plug 'https://github.com/airblade/vim-gitgutter.git' "Support for Git
Plug 'https://github.com/leafgarland/typescript-vim.git' "Typescript support
Plug 'pangloss/vim-javascript' "Javascript support
Plug 'https://github.com/hail2u/vim-css3-syntax.git' "vim css3 syntax support
Plug 'mxw/vim-jsx' "vim jsx support
Plug 'vim-scripts/loremipsum'
Plug 'dart-lang/dart-vim-plugin'
Plug 'altercation/vim-colors-solarized'
Plug 'google/vim-searchindex'
Plug 'flowtype/vim-flow'
Plug 'mg979/vim-visual-multi' "vscode multi cursor plugin
Plug 'sainnhe/sonokai' "Sonokai dark theme
call plug#end()


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

"Set material colorscheme
" colorscheme material
" colorscheme onedark

" Important!!
if has('termguicolors')
	set termguicolors
endif
" The configuration options should be placed before `colorscheme sonokai`.
let g:sonokai_style = 'andromeda'
let g:sonokai_better_performance = 1

" override some color schemes
let g:sonokai_colors_override = {'fg': ['#D8D8D8', '255'], 'grey': ['#183465', '255']}
colorscheme sonokai
