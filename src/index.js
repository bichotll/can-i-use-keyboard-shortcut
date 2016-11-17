import React from 'react'
import {render} from 'react-dom'

import Index from 'ui/Index/Index'

// importing bootstrap...I should not import the whole lib heh
import 'bootstrap/scss/bootstrap.scss'

const mountNode = document.getElementById('app')

render((
  <Index />
), mountNode)
