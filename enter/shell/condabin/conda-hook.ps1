$Env:CONDA_EXE = "/Users/swimmingcircle/cs156_code/enter/bin/conda"
$Env:_CE_M = ""
$Env:_CE_CONDA = ""
$Env:_CONDA_ROOT = "/Users/swimmingcircle/cs156_code/enter"
$Env:_CONDA_EXE = "/Users/swimmingcircle/cs156_code/enter/bin/conda"
$CondaModuleArgs = @{ChangePs1 = $True}

Import-Module "$Env:_CONDA_ROOT\shell\condabin\Conda.psm1" -ArgumentList $CondaModuleArgs

Remove-Variable CondaModuleArgs