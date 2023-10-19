import {Router} from 'express'
import {VariableController} from '../controller/variableController'
import { RulesController } from '../controller/rulesController'

const router = Router()

const {get,Add,addValue} = new VariableController()
const {List, NewRule,UpdateRule} = new RulesController()

router.get('/Variable',get)
router.post('/Variable',Add)
router.put('/AddValue',addValue)

router.get('/Rules', List)
router.post('/Rules', NewRule)
router.put('/Rules/:id', UpdateRule)

export default router 